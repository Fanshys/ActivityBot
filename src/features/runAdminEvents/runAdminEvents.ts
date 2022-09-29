import { UsersModel } from '../../models';
import { RunAdminEventsArgs } from './types';

export const runAdminEvents = async ({
  bot, chatId, message,
}: RunAdminEventsArgs): Promise<void> => {
  const { text } = message;
  const user = await UsersModel.findOne({ username: message.from.username });

  // if (text.charAt(0) !== '/') return;

  // if (!user.isAdmin) return;
};
