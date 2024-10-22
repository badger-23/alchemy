import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ characterName, onCharacterNameChange, onSubmit }) => (
  <form onSubmit={onSubmit} data-testid="controls-form">
    <label htmlFor="characterName">Character Name</label>
    <input
      id="characterName"
      type="text"
      value={characterName}
      onChange={onCharacterNameChange}
    />
    <button aria-label="find-quotes">Submit</button>
  </form>
);

Controls.propTypes = {
  characterName: PropTypes.string.isRequired,
  onCharacterNameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;
