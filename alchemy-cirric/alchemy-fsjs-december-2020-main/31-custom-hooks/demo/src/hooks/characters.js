import { useState, useEffect } from 'react';
import { findCharacterById, findCharacters } from '../services/rickAndMorty';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters]  = useState([]);

  useEffect(() => {
    findCharacters()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);


  return {
    loading,
    characters
  };
};

export const useCharacterById = id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    findCharacterById(id)
      .then(character => {
        setCharacter(character);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    character
  };
};
