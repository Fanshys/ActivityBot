import { sliceMessageCommand } from '../../helpers/sliceMessageCommand';
import { MessagesModel, UsersModel } from '../../models';
import { GetStatsFeature } from './types';

const dayMilliseconds = 60 * 60 * 24 * 1000;

const periods = {
  день: dayMilliseconds,
  неделя: dayMilliseconds * 7,
  месяц: dayMilliseconds * 30,
  год: dayMilliseconds * 364,
};

const iconsByTop = ['🥇', '🥈', '🥉'];

export const getStatsFeature = async ({ message, chatId, bot }: GetStatsFeature) => {
  const messagePeriod = sliceMessageCommand(message).toLowerCase();
  const period = periods[messagePeriod];
  const curDate = Date.now();

  if (!period) {
    return bot.sendMessage(chatId, 'Указан неверный период. Доступные периоды: день, неделя, месяц, год');
  }

  const messages = await MessagesModel.find({
    date: {
      $gte: new Date(curDate - period),
    },
    chatId,
  });

  const messagesByUser: { [key: string]: number } = messages.reduce((acc, current) => {
    if (acc[current.userId]) {
      acc[current.userId] += 1;
    } else {
      acc[current.userId] = 1;
    }

    return acc;
  }, {});

  const topUsers = Object.entries(messagesByUser)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const topUsersInfo = await UsersModel.find({
    id: {
      $in: topUsers.map((user) => user[0]),
    },
  });

  let result = '';

  topUsers.forEach((user, index) => {
    const userInfo = topUsersInfo[index];

    result += iconsByTop[index] || `${index + 1}.`;
    result += ` <a href="tg://user?id=${userInfo.id}">${userInfo.firstName} ${userInfo.lastName}</a>`;
    result += ` - ${user[1]}\n`;
  });

  return bot.sendMessage(chatId, `Топ по сообщениям за ${messagePeriod}:\n${result}`, {
    parse_mode: 'HTML',
  });
};
