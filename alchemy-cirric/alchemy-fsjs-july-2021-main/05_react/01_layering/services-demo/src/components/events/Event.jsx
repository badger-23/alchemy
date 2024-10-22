import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ year, text }) => {
  return (
    <p>
      {year} - {text}
    </p>
  );
};

Event.propTypes = {
  year: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Event;
