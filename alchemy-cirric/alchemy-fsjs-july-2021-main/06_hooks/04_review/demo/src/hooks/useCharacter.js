import { useEffect, useState } from 'react';
import { fetchCharacter } from '../services/rickAndMortyApi';

export const useCharacter = (id) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchCharacter(id)
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [id]);

  return { loading, character };
};
