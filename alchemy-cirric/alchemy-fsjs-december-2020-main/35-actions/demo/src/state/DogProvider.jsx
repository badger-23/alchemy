import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from '../reducers/dogReducer';

const DogContext = createContext(null);

export const DogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DogContext.Provider value={{ state, dispatch }}>
      {children}
    </DogContext.Provider>
  );
};

// export const useDogState = () => {
//   const { state } = useContext(DogContext);
//   return state;
// };

export const useSelector = selectorFn => {
  const { state } = useContext(DogContext);

  return selectorFn(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(DogContext);
  return dispatch;
};
