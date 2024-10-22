const fetch = require('node-fetch');
const mockResponse = require('./api-response.json');
const { getManyCharacters } = require('./rickAndMortyApi');

jest.mock('node-fetch');

describe('rick and morty service', () => {
  it('fetches many characters from the api', async() => {
    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockResponse)
    });
    const characters = await getManyCharacters([1, 3, 5, 7]);

    expect(characters).toEqual([
      { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
      { name: 'Summer Smith', species: 'Human', status: 'Alive' },
      { name: 'Jerry Smith', species: 'Human', status: 'Alive' },
      { name: 'Abradolf Lincler', species: 'Human', status: 'unknown' },
    ]);
  });
});
