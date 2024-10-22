import React, { Component, useEffect, useState } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import { findQuotes } from '../services/futuramaApi';

// export default class AllQuotes extends Component {
//   state = {
//     loading: true,
//     quotes: [],
//   };

//   async componentDidMount() {
//     const quotes = await findQuotes();
//     this.setState({
//       loading: false,
//       quotes,
//     });
//   }

//   render() {
//     const { loading, quotes } = this.state;

//     if (loading) return <h1>Loading</h1>;

//     return <QuoteList quotes={quotes} />;
//   }
// }

const AllQuotes = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    findQuotes().then((quotes) => {
      setQuotes(quotes);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading</h1>;
  return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
