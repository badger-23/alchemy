import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

const QuoteList = ({ quotes }) => (
  <ul aria-label="quotes">
    {quotes.map(({ name, quote, image }) => (
      //<Link to={`/${quote.id}`}><p>{quote.name}</p></Link>
      <li key={`${name}-${quote}`}>
        {/*             Quote(props), where props= */}
        <Quote          // {
          name={name}   // name: name,
          quote={quote} // quote: quote,
          image={image} // image: image,
        />              {/* } */}
      </li>
    ))}
  </ul>
);

QuoteList.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default QuoteList;
