import { BotMessage, FeatureInterface } from '../types';

export interface StartBotFeatureArgs extends FeatureInterface {
  message: BotMessage;
}
