import { botName, Commands } from '../../constants';
import { getStatsFeature } from '../getStatsFeature';
import { startBotFeature } from '../startBotFeature';
import { RunEventsArgs } from './types';

export const runEvents = async ({
  bot, chatId, message,
}: RunEventsArgs): Promise<void> => {
  const { text } = message;
  const { Start, Stats } = Commands;

  if (!text || text.charAt(0) !== '/') return;

  if (text.includes(Start) || text.includes(Start + botName)) {
    await startBotFeature({ bot, chatId, message });
  }

  if (text.includes(Stats) || text.includes(Stats + botName)) {
    await getStatsFeature({ bot, chatId, message });
  }
};
