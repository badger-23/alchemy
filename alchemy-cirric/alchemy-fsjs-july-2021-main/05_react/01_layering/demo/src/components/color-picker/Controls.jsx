import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({
  fgColor,
  bgColor,
  text,
  onChange,
}) => {
  return (
    <>
      <input type="color" name="fgColor" value={fgColor} onChange={onChange} />
      <input type="color" name="bgColor" value={bgColor} onChange={onChange} />
      <input type="text" name="text" value={text} onChange={onChange} />
    </>
  );
};

Controls.propTypes = {
  fgColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Controls;
