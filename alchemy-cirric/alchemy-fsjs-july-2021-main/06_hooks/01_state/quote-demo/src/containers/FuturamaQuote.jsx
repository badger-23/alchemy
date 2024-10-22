import React, { useState } from 'react';
import Load from '../components/quote/Load';
import Quote from '../components/quote/Quote';
import { fetchQuote } from '../services/futuramaApi';

const FuturamaQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    // set loading state to true
    setLoading(true);
    // fetch quote
    const quote = await fetchQuote();
    // set quote state
    setQuote(quote);
    // set loading state to false
    setLoading(false);
  };

  return (
    <>
      <Load onClick={handleClick} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        quote && (
          <Quote text={quote.text} name={quote.name} image={quote.image} />
        )
      )}
    </>
  );
};

export default FuturamaQuote;
