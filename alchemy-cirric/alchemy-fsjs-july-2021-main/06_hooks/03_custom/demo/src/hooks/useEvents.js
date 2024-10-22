import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEvents } from '../services/thisDayApi';

export const useEvents = () => {
  const { month, day } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents(month, day)
      .then((apiEvents) => setEvents(apiEvents)) // update our state
      .finally(() => setLoading(false)); // hide loading screen
  }, []);

  return { events, loading };
};
