import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ fgColor, bgColor, text }) => {
  return <div style={{ background: bgColor, color: fgColor }}>{text}</div>;
};

Display.propTypes = {
  fgColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Display;
