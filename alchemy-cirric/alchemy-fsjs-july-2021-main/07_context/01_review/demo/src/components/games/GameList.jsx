import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

const GameList = ({ games, filteredGames, searchTerm }) => {
  const gamesToDisplay = filteredGames.length ? filteredGames : games;

  if (searchTerm && !filteredGames.length) return <h3>No games found :(</h3>;

  return (
    <ul
      aria-label="games"
      style={{
        display: 'flex',
        width: '90vw',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {gamesToDisplay.map((game) => (
        <li key={game.id} style={{ listStyleType: 'none' }}>
          <Game {...game} />
        </li>
      ))}
    </ul>
  );
};

const gamesProp = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })
).isRequired;

GameList.propTypes = {
  games: gamesProp,
  filteredGames: gamesProp,
  searchTerm: PropTypes.string.isRequired,
};

export default GameList;
