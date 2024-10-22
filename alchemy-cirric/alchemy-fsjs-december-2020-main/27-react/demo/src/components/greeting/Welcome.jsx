import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({ excited }) => (
  <h1>Welcome{excited ? '!' : '.'}</h1>
);

Welcome.propTypes = {
  excited: PropTypes.bool
};

export default Welcome;
