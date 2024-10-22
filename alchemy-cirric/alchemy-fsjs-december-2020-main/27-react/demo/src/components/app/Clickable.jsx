import React from 'react';
import PropTypes from 'prop-types';

const Clickable = ({ onClick }) => (
  <button onClick={onClick}>Click Me</button>
);

Clickable.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Clickable;
