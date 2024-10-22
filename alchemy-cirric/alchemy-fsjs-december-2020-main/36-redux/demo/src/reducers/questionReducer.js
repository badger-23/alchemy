import { SET_QUESTIONS } from '../actions/questionActions';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_QUESTIONS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
