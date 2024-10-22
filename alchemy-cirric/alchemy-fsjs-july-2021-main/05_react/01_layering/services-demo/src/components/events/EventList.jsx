import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <li key={event.text}>
          <Event text={event.text} year={event.year} />
        </li>
      ))}
    </ul>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventList;
