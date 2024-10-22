export const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const { results } = await res.json();

  return results;
};

export const fetchCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  return res.json();
};
