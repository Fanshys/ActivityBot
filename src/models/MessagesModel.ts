import { Document, model, Schema } from 'mongoose';

export interface MessageModel extends Document {
  userId: number;
  chatId: number;
  date: Date;
}

const messageSchema = new Schema<MessageModel>({
  userId: {
    type: Number,
    required: true,
  },
  chatId: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export const MessagesModel = model('Messages', messageSchema);
