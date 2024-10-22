import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ bgColor, fgColor, text }) => (
  <div
    data-testid="display"
    style={{ backgroundColor: bgColor, color: fgColor }}
  >
    <p>{text}</p>
  </div>
);

ColorDisplay.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ColorDisplay;
