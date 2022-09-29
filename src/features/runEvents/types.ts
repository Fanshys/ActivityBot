import * as TelegramBotApi from 'node-telegram-bot-api';

export interface RunEventsArgs {
  bot: TelegramBotApi;
  chatId: number;
  message: TelegramBotApi.Message;
}
