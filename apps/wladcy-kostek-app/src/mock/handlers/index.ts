import bonusesHandlers from './bonuses';
import latestAppsHandlers from './latestApps';
import newsHandlers from './news';

const handlers = (url: string) => [
  ...latestAppsHandlers(url),
  ...newsHandlers(url),
  ...bonusesHandlers(url)
];

export default handlers;