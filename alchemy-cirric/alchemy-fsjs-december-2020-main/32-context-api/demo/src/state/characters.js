import { useState, useEffect } from 'react';
import { findCharacterById, findCharacters } from '../services/rickAndMorty';
import { useAlertError } from './error';

export const useRickAndMortyCharacters = () => {
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
  const alertError = useAlertError();

  useEffect(() => {
    findCharacterById(id)
      .then(character => {
        setCharacter(character);
        setLoading(false);
      })
      .catch(err => alertError(err));
  }, [id]);

  return {
    loading,
    character
  };
};
