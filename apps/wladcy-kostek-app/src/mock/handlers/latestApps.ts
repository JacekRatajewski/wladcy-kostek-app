import { HttpResponse, http } from 'msw';

export const latestAppsHandlers = (url: string) => {
  return [
    http.get(`${url}/latestApps`, () => {
      return HttpResponse.json({
        response: [
          {
            name: 'Sonar',
            background: 'assets/backgrounds/sonar.png',
          },
          {
            name: 'Terminal',
            background: 'assets/backgrounds/terminal.png',
          },
          {
            name: 'Prorok Codzienny',
            background: 'assets/backgrounds/prorok.png',
          },
        ],
      });
    }),
  ];
};

export default latestAppsHandlers;
