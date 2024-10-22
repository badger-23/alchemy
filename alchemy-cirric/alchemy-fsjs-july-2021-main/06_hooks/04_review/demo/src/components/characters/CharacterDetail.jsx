import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterDetail.css';

const CharacterDetail = ({
  name,
  status,
  species,
  image,
  origin,
  currentLocation,
}) => (
  <figure className={styles.character} aria-label="character">
    <img className={styles.characterImage} src={image} alt={name} />
    <figcaption>
      <h3>{name}</h3>
      <p>{species}</p>
      <p>Status: {status}</p>
      <p>Origin: {origin}</p>
      <p>Current Location: {currentLocation}</p>
    </figcaption>
  </figure>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  currentLocation: PropTypes.string.isRequired,
};

export default CharacterDetail;
