import React, { useEffect, useState } from 'react';
import GameList from '../components/games/GameList';
import Search from '../components/games/Search';
import { getGames } from '../services/mmoBombApi';

const GameCatalog = () => {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadGames = async () => {
      const gamesFromApi = await getGames();
      setGames(gamesFromApi);
      setLoading(false);
    };

    loadGames();

    // getGames()
    //   .then((gamesFromApi) => setGames(gamesFromApi))
    //   .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFilteredGames(
      games.filter((game) =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  if (loading) return <h1>Loading games...</h1>;

  return (
    <>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <GameList
        games={games}
        searchTerm={searchTerm}
        filteredGames={filteredGames}
      />
    </>
  );
};

export default GameCatalog;
