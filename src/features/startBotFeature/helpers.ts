/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { ChatsModel } from '../../models';
import { BotMessage } from '../types';

export const registerChat = async (message: BotMessage) => {
  const { id } = message.chat;

  const chat = new ChatsModel({
    id,
    users: [],
  });

  return chat.save();
};
