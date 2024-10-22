const getCharacters = require('./characters');

describe('getCharacters', () => {
  it('should fetch the first three characters from the Rick and Morty API', async () => {
    const characters = await getCharacters();

    expect(characters).toEqual(['Rick Sanchez', 'Morty Smith', 'Summer Smith']);
  });
});
