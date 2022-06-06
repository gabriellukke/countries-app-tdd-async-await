# Revisão sobre Testes (TDD) e Funções Assíncronas com Async e Await

## App de Informações sobre países 🇧🇷

[API de Países](https://restcountries.com/v3.1/region/) 

## 1. (TDD) Teste a função que vai fazer a requisição

<details>
  <summary>
    Implemente os testes necessários na função <code>fetchCountries</code>
  </summary> <br />

- Teste se, ao chamar a função `fetchCountries` com o argumento `'america'`, a função `fetch` utiliza o endpoint `'https://restcountries.com/v3.1/region/america'`;

- Teste se o retorno da função `fetchCountries` com o argumento `'america'` é uma estrutura de dados igual ao objeto `countries`, que já está importado no arquivo.

- Teste se, ao chamar a função `fetchCountries` sem argumento, retorna um erro com a mensagem: `'You must provide an url'`.

</details>

## 2. Requisição para API em um arquivo separado

## 3. Trazer os dados no script

## 4. Renderizar os dados na tela (Bônus)
