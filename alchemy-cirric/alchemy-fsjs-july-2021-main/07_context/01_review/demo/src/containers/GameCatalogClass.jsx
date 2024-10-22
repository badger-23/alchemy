import React, { Component } from 'react';
import GameList from '../components/games/GameList';
import Search from '../components/games/Search';
import { getGames } from '../services/mmoBombApi';

export default class GameCatalog extends Component {
  state = {
    loading: true,
    games: [],
    filteredGames: [],
    searchTerm: '',
  };

  async componentDidMount() {
    const games = await getGames();
    this.setState({ games, loading: false });
  }

  handleSearch = ({ target }) => {
    this.setState({ searchTerm: target.value }, () => {
      // Get our current state for games & searchTerm
      const { games, searchTerm } = this.state;

      // Filter our games (in state) based on the game's name
      const filteredGames = games.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Update our games state to match what was filtered
      this.setState({ filteredGames });
    });
  };

  render() {
    const { loading, games, filteredGames, searchTerm } = this.state;

    if (loading) return <h1>Loading games...</h1>;

    return (
      <>
        <Search searchTerm={searchTerm} onSearch={this.handleSearch} />
        <GameList
          games={games}
          searchTerm={searchTerm}
          filteredGames={filteredGames}
        />
      </>
    );
  }
}
