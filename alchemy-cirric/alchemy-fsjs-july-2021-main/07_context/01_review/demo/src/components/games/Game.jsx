import React from 'react';
import PropTypes from 'prop-types';

const Game = ({ name, image, platform, genre, url }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <h3>{name}</h3>
      <p>{genre}</p>
      <p>{platform}</p>
      <a href={url} target="_blank" rel="noreferrer">
        View More
      </a>
    </figcaption>
  </figure>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Game;
