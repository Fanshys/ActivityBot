import * as TelegramBotApi from 'node-telegram-bot-api';

export interface FeatureInterface {
  bot: BotApi;
  chatId: number;
}

export type BotApi = TelegramBotApi;
export type BotMessage = TelegramBotApi.Message;
