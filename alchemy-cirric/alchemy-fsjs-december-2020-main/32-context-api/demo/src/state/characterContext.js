import React, { createContext, useContext, useEffect, useState } from 'react';
import Loading from '../components/loading/Loading';
import { findFuturamaCharacters } from '../services/futurama';
import { useRickAndMortyCharacters } from './characters';

export const CharacterContext = createContext(null);

export const RickAndMortyProvider = ({ children }) => {
  const { loading, characters } = useRickAndMortyCharacters();

  return (
    <CharacterContext.Provider value={{ characters }}>
      {loading ? <Loading /> : children}
    </CharacterContext.Provider>
  );
};

export const FuturamaProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    findFuturamaCharacters()
      .then(characters => {
        setCharacters(characters);
        setLoading(false);
      });
  }, []);

  return (
    <CharacterContext.Provider value={{ characters }}>
      {loading ? <Loading /> : children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};
