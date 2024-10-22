const { fetchCharacters } = require('./characters');
const request = require('superagent');

jest.mock('superagent');

describe('fetchCharacters', () => {
  it('fetches the first five rick and morty characters', async() => {
    request.get.mockResolvedValue({
      body: {
        results: [
         { name: 'Rick Sanchez' },
         { name: 'Morty Smith' },
         { name: 'Summer Smith' },
         { name: 'Beth Smith' },
         { name: 'Jerry Smith' }
        ]
      }
    });

    const characters = await fetchCharacters();
    expect(characters).toEqual([
      'Rick Sanchez',
      'Morty Smith',
      'Summer Smith',
      'Beth Smith',
      'Jerry Smith'
    ]);
  });
});
