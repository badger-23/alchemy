import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/rickAndMortyApi';

export const useCharacters = (currentPage) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchCharacters(currentPage)
      .then((res) => {
        setCharacters(res.characters);
        setTotalPages(res.totalPages);
      })
      .finally(() => setLoading(false));
  }, [currentPage]);

  return { loading, characters, totalPages };
};
