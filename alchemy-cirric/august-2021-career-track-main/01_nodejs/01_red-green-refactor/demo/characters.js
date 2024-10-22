const fetch = require('cross-fetch');

const getCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/1,2,3');
  const body = await res.json();

  return body.map((character) => character.name);
};

const getCharactersPromiseStyle = () => {
  return fetch('https://rickandmortyapi.com/api/character/1,2,3')
    .then((res) => res.json())
    .then((characters) => characters.map((character) => character.name));
};

module.exports = getCharacters;
