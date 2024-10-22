import React from 'react';
import PropTypes from 'prop-types';
import { useCharacterById } from '../state/characters';
import CharacterDetail from '../components/details/CharacterDetail';
import Loading from '../components/loading/Loading';

const CharacterById = ({ match }) => {
  const { loading, character } = useCharacterById(match.params.id);

  if(loading) return <Loading />;
  return <CharacterDetail {...character} />;
};

CharacterById.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CharacterById;
