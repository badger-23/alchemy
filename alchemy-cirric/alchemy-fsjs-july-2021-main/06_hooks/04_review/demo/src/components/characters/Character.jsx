import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ name, status, species, image }) => (
  <figure className={styles.character}>
    <img className={styles.characterImage} src={image} alt={name} />
    <figcaption>
      <h3>{name}</h3>
      <p>{species}</p>
      <p>Status: {status}</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
