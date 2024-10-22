import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ bgColor, fgColor, text }) => (
  <p style={{ color: fgColor, backgroundColor: bgColor }}>{text}</p>
);

Display.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Display;
