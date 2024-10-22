import React, { useState } from 'react';

const MyComponent = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const handleChange = ({ target }) => setText(target.value);
  const increment = () => setCount(prevCount => prevCount + 1)

  return (
    <>
      <h1>{text}</h1>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={increment}>Increment - {count}</button>
    </>
  )
};

export default MyComponent;
