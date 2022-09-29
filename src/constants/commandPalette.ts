import { Commands } from './commands';

const { Start, Stats } = Commands;

export const commandPalette = [
  { command: Start, description: 'Старт бота' },
  { command: Stats, description: 'Получить статистику за (день/неделя/месяц/год)' },
];
