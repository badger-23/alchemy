import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ bgColor, fgColor, text, onChange }) => (
  <>
    <label htmlFor="bgColor">Background Color</label>
    <input
      id="bgColor"
      type="color"
      name="bgColor"
      value={bgColor}
      onChange={onChange}
    />

    <label htmlFor="fgColor">Foreground Color</label>
    <input
      id="fgColor"
      type="color"
      name="fgColor"
      value={fgColor}
      onChange={onChange}
    />

    <label htmlFor="text">Text: </label>
    <input
      id="text"
      aria-label="Enter some text"
      type="text"
      name="text"
      value={text}
      onChange={onChange}
    />
  </>
);

Controls.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Controls;
