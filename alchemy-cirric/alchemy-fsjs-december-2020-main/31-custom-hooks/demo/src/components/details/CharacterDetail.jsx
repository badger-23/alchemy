import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ image, name, status, species }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </figcaption>
  </figure>
);

CharacterDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default CharacterDetail;
