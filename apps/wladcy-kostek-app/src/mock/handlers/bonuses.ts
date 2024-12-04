import { HttpResponse, http } from 'msw';

export const bonusesHandlers = (url: string) => {
  return [
    http.get(`${url}/bonus/by/test`, () => {
      return HttpResponse.json({
        errorCode: 200,
        errorMessage: null,
        result: 2,
      });
    }),
    http.get(`${url}/bonus/2`, () => {
      return HttpResponse.json({
        errorCode: 200,
        errorMessage: null,
        result: {
          id: 2,
          name: 'Test User',
          sessionCount: 127,
          bonusCount: 1,
          moneySupported: 50,
          playerSeasonStart: 1
        },
      });
    }),
  ];
};

export default bonusesHandlers;
