import React from 'react';
import PropTypes from 'prop-types';

const ColorControls = ({ bgColor, fgColor, text, onChange }) => (
  <>
    <label htmlFor="bgColor">
      Background Color
      <input
        id="bgColor"
        name="bgColor" 
        type="color"
        value={bgColor}
        onChange={onChange}
      />
    </label>

    <label htmlFor="fgColor">
      Foreground Color
      <input
        id="fgColor"
        name="fgColor"
        type="color"
        value={fgColor}
        onChange={onChange}
      />
    </label>

    <label htmlFor="text">
      Text
      <input
        id="text"
        name="text"
        type="text"
        value={text}
        onChange={onChange}
      />
    </label>
  </>
);

ColorControls.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ColorControls;
