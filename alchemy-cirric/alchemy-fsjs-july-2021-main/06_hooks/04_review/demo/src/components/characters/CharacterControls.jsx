import React from 'react';
import PropTypes from 'prop-types';

const CharacterControls = ({
  currentPage,
  totalPages,
  onDecrementPage,
  onIncrementPage,
}) => (
  <>
    <button
      onClick={onDecrementPage}
      disabled={currentPage <= 1}
      aria-label="Go to previous page"
    >
      &lt;
    </button>{' '}
    {currentPage} / {totalPages}{' '}
    <button
      onClick={onIncrementPage}
      disabled={currentPage >= totalPages}
      aria-label="Go to next page"
    >
      &gt;
    </button>
  </>
);

CharacterControls.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onDecrementPage: PropTypes.func.isRequired,
  onIncrementPage: PropTypes.func.isRequired,
};

export default CharacterControls;
