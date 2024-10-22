import React, { Component } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import { fetchQuote } from '../services/futuramaApi';

export default class FuturamaQuote extends Component {
  state = {
    quote: null,
    loading: false,
  };

  handleClick = async () => {
    this.setState({ loading: true });
    const quote = await fetchQuote();
    this.setState({ quote, loading: false });
  };

  render() {
    const { quote, loading } = this.state;

    return (
      <>
        <Load onClick={this.handleClick} />
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          quote && (
            <Quote text={quote.text} name={quote.name} image={quote.image} />
          )
        )}
      </>
    );
  }
}
