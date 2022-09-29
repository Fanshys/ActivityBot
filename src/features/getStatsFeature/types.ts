import { Message } from 'node-telegram-bot-api';
import { FeatureInterface } from '../types';

export interface GetStatsFeature extends FeatureInterface {
  message: Message;
}
