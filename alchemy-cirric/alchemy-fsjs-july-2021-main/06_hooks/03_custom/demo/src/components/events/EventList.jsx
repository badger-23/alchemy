import React from 'react';
import { useEvents } from '../../hooks/useEvents';
import Event from './Event';

const EventList = () => {
  const { events, loading } = useEvents();

  if (loading) return <h1>Loading...</h1>;

  return (
    <ul aria-label="events">
      {events.map(({ year, text }) => (
        <li key={`${year}-${text}`}>
          <Event year={year} text={text} />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
