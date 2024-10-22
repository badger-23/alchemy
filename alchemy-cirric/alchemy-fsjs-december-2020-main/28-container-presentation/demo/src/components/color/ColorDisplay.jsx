import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ bgColor, fgColor, text }) => (
  <div 
    data-testid="display"
    style={{ color: fgColor, backgroundColor: bgColor, width: '50rm', height: '50rem' }}>
    <p style={{ fontSize: '5rem' }}>{text}</p>
  </div>
);

ColorDisplay.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired  
};

export default ColorDisplay;
