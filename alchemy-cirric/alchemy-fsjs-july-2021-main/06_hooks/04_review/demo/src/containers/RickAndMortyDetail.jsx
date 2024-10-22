import React from 'react';
import { Link, useParams } from 'react-router-dom';
import CharacterDetail from '../components/characters/CharacterDetail';
import { useCharacter } from '../hooks/useCharacter';

const RickAndMortyDetail = () => {
  const { id } = useParams();
  const { loading, character } = useCharacter(id);

  if (loading)
    return (
      <img
        src="https://thumbs.gfycat.com/SoftEarnestGyrfalcon-max-1mb.gif"
        alt="Loading Rick and Mortys..."
      />
    );

  return (
    <>
      <Link to="/">
        <h2>Go Back</h2>
      </Link>
      <CharacterDetail {...character} />
    </>
  );
};

export default RickAndMortyDetail;
