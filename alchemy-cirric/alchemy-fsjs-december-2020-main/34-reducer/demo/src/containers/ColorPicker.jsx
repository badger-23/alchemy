import React, { useReducer, useState } from 'react';
import ColorControls from '../components/color/ColorControls';
import ColorDisplay from '../components/color/ColorDisplay';
import reducer, { initialState } from '../reducers/colorReducer';

const useReducerOurWay = (reducer, someInitialState) => {
  const [currentState, setCurrentState] = useState(someInitialState);

  const specialDispatch = action => {
    const newState = reducer(currentState, action);
    setCurrentState(newState);
  };

  return [
    currentState,
    specialDispatch
  ];
};

const ColorPicker = () => {
  const [state, dispatch] = useReducerOurWay(reducer, initialState);

  const handleChange = ({ target }) => {
    dispatch({
      type: target.id,
      payload: target.value
    });
  };

  return (
    <>
      <ColorControls
        bgColor={state.bgColor}
        fgColor={state.fgColor}
        text={state.text}
        onChange={handleChange}
      />

      <ColorDisplay
        bgColor={state.bgColor}
        fgColor={state.fgColor}
        text={state.text}
      />
    </>
  );
};

export default ColorPicker;
