import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Character from '../components/characters/Character';
import { fetchCharacter } from '../services/rickAndMortyApi';

const RickAndMortyDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    // fetch character & update state
    fetchCharacter(id)
      .then((character) => setCharacter(character))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <main>
      <Link to="/">Go home</Link>
      {loading ? <h3>Loading character...</h3> : <Character {...character} />}
    </main>
  );
};

export default RickAndMortyDetail;
