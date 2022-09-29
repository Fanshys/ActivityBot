import { Message } from 'node-telegram-bot-api';
import { ChatsModel } from '../../models';
import { arleadyRegisteredMessage, successMessage } from './constants';
import { registerChat } from './helpers';
import { StartBotFeatureArgs } from './types';

export const startBotFeature = async ({ bot, chatId, message }: StartBotFeatureArgs): Promise<Message> => {
  try {
    const chat = await ChatsModel.findOne({ id: message.chat.id });

    if (chat) {
      return await bot.sendMessage(chatId, arleadyRegisteredMessage);
    }

    await registerChat(message);

    return await bot.sendMessage(chatId, successMessage);
  } catch (error) {
    return bot.sendMessage(chatId, 'Произошла ошибка');
  }
};
