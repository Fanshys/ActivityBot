import { Document, model, Schema } from 'mongoose';

export interface UserModel extends Document {
  id: number;
  firstName: string;
  username?: string;
  lastName?: string;
}

export const userSchema = new Schema<UserModel>({
  id: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
});

export const UsersModel = model('Users', userSchema);
