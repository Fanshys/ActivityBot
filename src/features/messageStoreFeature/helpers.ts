import { Message } from 'node-telegram-bot-api';
import { ChatsModel, UsersModel } from '../../models';
import { ChatUserRoles } from '../../models/ChatsModel';

export const checkAndRegisterUser = async (message: Message) => {
  const { id: chatId } = message.chat;
  const {
    id: userId, first_name: firstName, last_name: lastName, username,
  } = message.from;

  const userInfo = {
    id: userId,
    firstName,
    lastName: lastName || '',
    username: username || '',
  };
  const user = await UsersModel.findOne({ id: userId });

  if (!user) {
    const newUser = new UsersModel(userInfo);

    await newUser.save();
  }

  const chat = await ChatsModel.findOne({ id: chatId });
  const chatUser = chat.users?.find(({ id }) => id === userId);

  if (chat.users && !chatUser) {
    chat.users.push({
      ...userInfo,
      role: ChatUserRoles.User,
    });

    await chat.save();
  }
};
