require('../mocks/fetchSimulator');
const { fetchCountries } = require('../helpers/fetchCountries');
const countries = require('../mocks/countries');

describe('Função fetchCountries', () => {
  it('Ao chamar a função "fetchCountries" com o argumento "america", a função "fetch" utiliza o endpoint https://restcountries.com/v3.1/region/america', () => {
    fetchCountries('america');

    expect(fetch).toHaveBeenCalledWith('https://restcountries.com/v3.1/region/america');
  });
  
  it('O retorno da função "fetchCountries" com o argumento "america" é uma estrutura de dados igual ao objeto "countries", que já está importado no arquivo.', async () => {
    const mockResult = await fetchCountries('america');

    expect(mockResult).toStrictEqual(countries);
  });

  it('Ao chamar a função "fetchCountries" sem argumento, retorna um erro com a mensagem: "You must provide an url".', async () => {
    const mockError = await fetchCountries();

    expect(mockError).toEqual(new Error('You must provide an url'))
  });
});
