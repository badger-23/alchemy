import React, { Component } from 'react';
import EventList from '../components/events/EventList';
import { fetchEvents } from '../services/thisDayApi';

export default class ThisDay extends Component {
  state = {
    events: [],
    loading: true,
  };

  async componentDidMount() {
    const events = await fetchEvents();
    this.setState({ events, loading: false });
  }

  render() {
    const { events, loading } = this.state;
    if (loading) return <h1>Loading...</h1>;
    return <EventList events={events} />;
  }
}
