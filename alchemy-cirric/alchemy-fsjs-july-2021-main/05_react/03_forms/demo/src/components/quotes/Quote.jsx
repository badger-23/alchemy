import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ name, quote, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>{quote} - {name}</figcaption>
  </figure>
);

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Quote;
