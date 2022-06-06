const countries = require('./countries');

const ENDPOINTS = {
  REGION: 'https://restcountries.com/v3.1/region/americas',
};

const TIME_IN_MILLISECONDS = 200;

const fetchSimulator = (url) => {
  if (url.endsWith('undefined')) {
    return Promise.reject(new Error('You must provide an url'));
  }
  const validUrl = Object.values(ENDPOINTS).includes(url);
  return Promise.resolve({
    status: validUrl ? 200 : 404,
    ok: validUrl,
    json: () => new Promise((resolve) => {
      setTimeout(() => {
        if (url === ENDPOINTS.REGION) {
          return resolve(countries);
        }

        return resolve({ results: [] });
      }, TIME_IN_MILLISECONDS);
    }),
  });
};

global.fetch = jest.fn(fetchSimulator);
afterEach(jest.clearAllMocks);

module.exports = fetchSimulator;
