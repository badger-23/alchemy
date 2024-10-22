import React from 'react';
import CharacterControls from '../components/characters/CharacterControls';
import CharacterList from '../components/characters/CharacterList';
import { useCharacters } from '../hooks/useCharacters';
import { usePagination } from '../hooks/usePagination';

const RickAndMorty = () => {
  const { currentPage, handlePageChange } = usePagination();
  const { loading, characters, totalPages } = useCharacters(currentPage);

  if (loading)
    return (
      <img
        src="https://thumbs.gfycat.com/SoftEarnestGyrfalcon-max-1mb.gif"
        alt="Loading Rick and Mortys..."
      />
    );

  return (
    <>
      <CharacterControls
        currentPage={currentPage}
        totalPages={totalPages}
        onDecrementPage={() => handlePageChange(-1)}
        onIncrementPage={() => handlePageChange(1)}
      />
      <CharacterList characters={characters} />
    </>
  );
};

export default RickAndMorty;
