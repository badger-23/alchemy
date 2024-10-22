import React, { useState } from 'react';
import {
  FuturamaProvider,
  RickAndMortyProvider
} from '../state/characterContext';
import CharacterList from '../components/characters/CharacterList';

const CharactersPage = () => {
  const [Provider, setProvider] = useState(() => RickAndMortyProvider);

  const toggle = ({ target }) => {
    if(target.checked) setProvider(() => FuturamaProvider);
    else setProvider(() => RickAndMortyProvider);
  };

  return (
    <>
      <input type="checkbox" onChange={toggle} />
      <Provider>
        <CharacterList />
      </Provider>
    </>
  );
};

export default CharactersPage;
