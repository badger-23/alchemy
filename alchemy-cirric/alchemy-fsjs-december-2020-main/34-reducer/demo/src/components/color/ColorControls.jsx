import React from 'react';
import PropTypes from 'prop-types';

const ColorControls = ({ bgColor, fgColor, text, onChange }) => (
  <>
    <label htmlFor="BG_COLOR_CHANGE">Background Color</label>
    <input
      id="BG_COLOR_CHANGE"
      type="color"
      value={bgColor}
      onChange={onChange}
    />

    <label htmlFor="FG_COLOR_CHANGE">Foreground Color</label>
    <input
      id="FG_COLOR_CHANGE"
      type="color"
      value={fgColor}
      onChange={onChange}
    />

    <label htmlFor="TEXT_CHANGE">Text</label>
    <input id="TEXT_CHANGE" type="text" value={text} onChange={onChange} />
  </>
);

ColorControls.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorControls;
