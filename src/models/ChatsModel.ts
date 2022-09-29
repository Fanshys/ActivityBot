import { Document, model, Schema } from 'mongoose';
import { UserModel, userSchema } from './UsersModel';

export enum ChatUserRoles {
  Admin = 'admin',
  Moderator = 'moderator',
  User = 'user',
}

export interface ChatUserModel extends Pick<UserModel, 'id' | 'username' | 'firstName' | 'lastName'> {
  role: ChatUserRoles;
}

export interface ChatModel extends Document {
  id: number;
  users: ChatUserModel[]
}

const chatUserSchema = new Schema<ChatUserModel>({
  ...userSchema.obj,
  role: {
    type: String,
    enum: ChatUserRoles,
    required: true,
  },
});

const chatSchema = new Schema<ChatModel>({
  id: {
    type: Number,
    required: true,
  },
  users: [chatUserSchema],
});

export const ChatsModel = model('Chats', chatSchema);
