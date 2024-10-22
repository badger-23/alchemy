import React from 'react';
import PropTypes from 'prop-types';
import { useCharacterById } from '../hooks/characters';
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




















// export default class CharacterById extends Component {
//   static propTypes = {
//     match: PropTypes.shape({
//       params: PropTypes.shape({
//         id: PropTypes.string.isRequired
//       }).isRequired
//     }).isRequired
//   }

//   state ={
//     loading: true,
//     character: null
//   }

//   componentDidMount() {
//     findCharacterById(this.props.match.params.id)
//       .then(character => {
//         this.setState({ character, loading: false });
//       });
//   }

//   render() {
//     const { loading, character } = this.state;
    
//     if(loading) return <Loading />;
//     return (
//       <CharacterDetail {...character} />
//     );
//   }
// }
