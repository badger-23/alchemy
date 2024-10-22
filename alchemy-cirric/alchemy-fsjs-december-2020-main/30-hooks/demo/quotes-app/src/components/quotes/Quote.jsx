import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ image, character, text }) => (
  <figure className={styles.Quote}>
    <img src={image} alt={character} />
    <figcaption>
      <p>{character}</p>
      <p>{text}</p>
    </figcaption>
  </figure>
);

Quote.propTypes = {
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Quote;
