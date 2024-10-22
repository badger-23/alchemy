import getCharacters from './characters';

describe('getCharacters', () => {
  it('gets a list of characters from the Rick & Morty API', async () => {
    const characters = await getCharacters();

    expect(characters).toEqual(['Rick Sanchez', 'Morty Smith', 'Summer Smith']);
  });
});
