import React, { Component } from 'react';

export default class Character extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then(({ results: characters }) => characters.map(character => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        image: character.image
      })))
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    const characterElements = characters.map(character => (
      <li key={character.id} style={{ width: '100px', listStyle: 'none', fontSize: '0.2em', padding: '0.5rem' }}>
        <p>{character.name} - {character.species}</p>
        <p>{character.status}</p>
        <img src={character.image} alt={character.name} style={{ width: '100%' }}/>
      </li>
    ))

    return (
      <>
        <h1>Characters</h1>
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {characterElements}
        </ul>
      </>
    )
  }
}
