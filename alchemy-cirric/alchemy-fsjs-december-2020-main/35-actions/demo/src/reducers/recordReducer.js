export const initialState = {
  before: [],
  current: '#FF0000',
  after: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'RECORD_VALUE':
      return {
        ...state,
        before: [...state.before, state.current],
        current: action.payload
      };
    case 'UNDO_VALUE':
      return {
        ...state,
        after: [state.current, ...state.after],
        current: state.before[state.before.length - 1],
        before: state.before.slice(0, -1)
      };
    case 'REDO_VALUE':
      return {
        ...state,
        before: [...state.before, state.current],
        current: state.after[0],
        after: state.after.slice(1)
      };
    default:
      return state;
  }
}
