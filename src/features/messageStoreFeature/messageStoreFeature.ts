import { Message } from 'node-telegram-bot-api';
import { MessagesModel } from '../../models';
import { checkAndRegisterUser } from './helpers';

const cache = {};

export const messageStoreFeature = async (message: Message) => {
  const { id: chatId } = message.chat;
  const { id: userId } = message.from;

  if (!cache[`${chatId}-${userId}`]) {
    checkAndRegisterUser(message);
  }

  const newMessage = new MessagesModel({
    chatId,
    userId,
    date: new Date(),
  });

  return newMessage.save();
};
