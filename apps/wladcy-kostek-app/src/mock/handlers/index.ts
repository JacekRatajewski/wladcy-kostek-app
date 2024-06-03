import latestAppsHandlers from './latestApps';
import newsHandlers from './news';

const handlers = (url: string) => [
  ...latestAppsHandlers(url),
  ...newsHandlers(url),
];

export default handlers;