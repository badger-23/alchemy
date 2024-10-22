import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ year, text }) => (
  <article>
    {year} - {text}
  </article>
);

Event.propTypes = {
  year: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Event;
