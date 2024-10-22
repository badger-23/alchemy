import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name, species, status }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      {name} - {species} - {status}
    </figcaption>
  </figure>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default Character;
