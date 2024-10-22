const fetch = require('node-fetch');

const getCharacter = id => {

};

const getManyCharacters = ids => {
  // [promise to get character 1, promise to get character 3 ...]
  return Promise.all(ids.map(id => getCharacter(id)));
};

const getCharacterOrigins = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => {
      return res.json();
    })
    // ['https://rickandmortyapi.com/api/location/1', 'https://rickandmortyapi.com/api/location/1', ...]
    .then(({ results }) => results.map(character => character.origin.url))
    .then(originUrls => originUrls.filter(url => url))
    .then(originUrls => Promise.all(originUrls.map(url => fetch(url))))
    .then(originRes => {
      // originRes -> [resOrigin1, resOrigin2, ....]
    });
};

module.exports = {
  getManyCharacters
};
