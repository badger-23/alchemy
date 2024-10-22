const request = require('superagent');

const fetchCharacters = async() => {
  const { body } = await request.get('https://rickandmortyapi.com/api/character');

  return body.results
    .slice(0, 5)
    .map(({ name }) => name);
};

module.exports = {
  fetchCharacters
};
