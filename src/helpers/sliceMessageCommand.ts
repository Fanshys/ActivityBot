import { BotMessage } from '../features/types';

export const sliceMessageCommand = (message: BotMessage): string => message.text.slice(message.entities[0].length).trim();
