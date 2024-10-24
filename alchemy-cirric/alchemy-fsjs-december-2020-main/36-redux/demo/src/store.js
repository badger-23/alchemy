import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

// const [state, dispatch] = useReducer(reducer);
const store = createStore(reducer, composeWithDevTools());

export default store;
