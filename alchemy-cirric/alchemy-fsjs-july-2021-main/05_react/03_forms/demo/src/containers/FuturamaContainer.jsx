import React, { Component } from 'react';
import Controls from '../components/quotes/Controls';
import QuoteList from '../components/quotes/QuoteList';
import { fetchQuoteByCharacter, fetchQuotes } from '../services/futuramaApi';

export default class FuturamaContainer extends Component {
  state = {
    loading: true,
    quotes: [],
    characterName: '',
  };

  async componentDidMount() {
    const quotes = await fetchQuotes();
    this.setState({ quotes, loading: false });
  }

  handleCharacterNameChange = (event) => {
    this.setState({ characterName: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const quotes = await fetchQuoteByCharacter(this.state.characterName);
    this.setState({ quotes, loading: false });
  };

  render() {
    const { loading, quotes, characterName } = this.state;

    if (loading) return <p>Loading...</p>;

    return (
      <>
        <Controls
          characterName={characterName}
          onCharacterNameChange={this.handleCharacterNameChange}
          onSubmit={this.handleSubmit}
        />
        <QuoteList quotes={quotes} />
      </>
    );
  }
}
