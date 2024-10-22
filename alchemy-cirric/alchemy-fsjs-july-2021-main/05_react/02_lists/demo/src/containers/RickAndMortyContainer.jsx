import React, { Component } from 'react';
import { findCharacters } from '../services/rickAndMortyApi';
import CharacterList from '../components/characters/CharacterList';

export default class RickAndMortyContainer extends Component {
  state = {
    loading: true,
    characters: [],
  };

  componentDidMount() {
    findCharacters().then((characters) =>
      this.setState({ characters, loading: false })
    );
  }

  render() {
    const { loading, characters } = this.state;

    if (loading) {
      return (
        <img
          src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
          alt="loading spinner"
        />
      );
    }

    return <CharacterList characters={characters} />;
  }
}
