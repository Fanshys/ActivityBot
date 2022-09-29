import * as TelegramBotApi from 'node-telegram-bot-api';

export interface RunAdminEventsArgs {
  bot: TelegramBotApi;
  chatId: number;
  message: TelegramBotApi.Message;
}
