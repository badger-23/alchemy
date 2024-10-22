export const findCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((json) =>
      json.results.map((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        image: character.image,
      }))
    );
};
