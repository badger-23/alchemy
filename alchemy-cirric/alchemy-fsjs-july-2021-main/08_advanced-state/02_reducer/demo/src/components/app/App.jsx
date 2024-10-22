import React, { useReducer } from 'react';

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '8vw',
};

const buttonStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
};

const initialValue = {
  count: 0,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return { count: 0 };

    default:
      return new Error(`Unexpected Action Type: ${action.type}`);
  }
};

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialValue);

  return (
    <div style={divStyle}>
      Count: {state.count}
      <div style={buttonStyle}>
        <button
          onClick={() => {
            dispatch({ type: 'increment', payload: 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement', payload: 1 });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'reset' });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
