import { SET_ANSWER } from '../actions/answerActions';

const initialState = {
  list: Array(10).fill(null)
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_ANSWER:
      return {
        ...state,
        list: state.list.map((answer, i) => {
          if(i === action.payload.index) return action.payload.answer;
          return answer;
        })
        // list: [
        //   ...state.list.slice(0, action.payload.index),
        //   action.payload.answer,
        //   ...state.list.slice(action.payload.index + 1)
        // ]
      };
    default:
      return state;
  }
}
