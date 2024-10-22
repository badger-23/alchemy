const request = path => {
  return fetch(`https://rickandmortyapi.com${path}`)
    .then(res => {
      if(!res.ok) throw new Error(`Unable to fetch ${path}: ${res.status}`);
      return res.json();
    });
};

export const findCharacters = () => {
  return request('/api/character')
    .then(({ results }) => results.map(result => ({
      id: result.id,
      name: result.name,
      image: result.image
    })));
};

export const findCharacterById = id => {
  return request(`/api/character/${id}`)
    .then(json => ({
      id: json.id,
      name: json.name,
      status: json.status,
      species: json.species,
      image: json.image
    }));
};
