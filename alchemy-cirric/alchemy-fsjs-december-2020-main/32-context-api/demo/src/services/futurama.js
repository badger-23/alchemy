export const findFuturamaCharacters = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/v2/characters')
    .then(res => res.json())
    .then(json => json.map(character => ({
      id: character.Name,
      name: character.Name,
      image: character.PicUrl
    })));
};
