import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

const QuoteList = ({ quotes }) => {
  const quoteElements = quotes.map((quote) => (
    <li key={quote.text}>
      <Quote
        image={quote.image}
        character={quote.character}
        text={quote.text}
      />
    </li>
  ));

  return <ul data-testid="quotes">{quoteElements}</ul>;
};

QuoteList.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default QuoteList;
