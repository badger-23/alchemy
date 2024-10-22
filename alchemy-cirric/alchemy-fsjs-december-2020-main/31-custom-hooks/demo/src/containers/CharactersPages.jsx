import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/loading/Loading';
import { useCharacters } from '../hooks/characters';
import { findCharacters } from '../services/rickAndMorty';

const CharactersPage = () => {
  const { loading, characters } = useCharacters();

  if(loading) return <Loading />;
  return <CharacterList characters={characters} />;
};

export default CharactersPage;






















// export default class CharactersPage extends Component {
//   state = {
//     loading: true,
//     characters: []
//   }

//   componentDidMount() {
//     findCharacters()
//       .then(characters => {
//         this.setState({ characters, loading: false });
//       });
//   }

//   render() {
//     const { loading, characters } = this.state;

//     if(loading) return <Loading />;
//     return (
//       <CharacterList characters={characters} />
//     );
//   }
// }
