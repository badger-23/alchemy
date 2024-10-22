import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, status, image }) => (
  <>
    <img src={image} alt={name} />
    <p>{name}</p>
    <p>{status}</p>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
