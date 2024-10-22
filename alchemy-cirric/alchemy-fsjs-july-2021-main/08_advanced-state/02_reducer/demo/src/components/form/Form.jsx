import React, { useReducer } from 'react';

const initialValue = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return new Error(`Unexpected Action Type: ${action.type}`);
  }
};

function Form() {
  const [state, dispatch] = useReducer(formReducer, initialValue);

  const actionUpdater = (event) => {
    dispatch({
      type: 'update',
      payload: { key: event.target.name, value: event.target.value },
    });
  };

  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        type="text"
        value={state.firstName}
        onChange={actionUpdater}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        type="lastName"
        value={state.lastName}
        onChange={actionUpdater}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        value={state.email}
        onChange={actionUpdater}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        value={state.password}
        onChange={actionUpdater}
      />
    </div>
  );
}

export default Form;
