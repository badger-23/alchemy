export const findCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(({ results }) => results.map(result => ({
      id: result.id,
      name: result.name,
      image: result.image
    })));
};

export const findCharacterById = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(json => ({
      id: json.id,
      name: json.name,
      status: json.status,
      species: json.species,
      image: json.image
    }));
};
