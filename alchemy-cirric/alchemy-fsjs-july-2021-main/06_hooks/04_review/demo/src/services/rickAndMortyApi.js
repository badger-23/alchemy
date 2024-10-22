export const fetchCharacters = async (page) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const { info, results } = await res.json();

  return { totalPages: info.pages, characters: results };
};

export const fetchCharacter = async (characterId) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
  const { id, name, status, species, image, origin, location } =
    await res.json();

  return {
    id,
    name,
    status,
    species,
    image,
    origin: origin.name,
    currentLocation: location.name,
  };
};
