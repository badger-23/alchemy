import React, { useState, useEffect } from 'react';

const EffectDemo = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log('useEffect called with empty dependency array');
  }, []);

  useEffect(() => {
    console.log('useEffect called with [toggle], where number = ', number);
  }, [toggle]);

  return (
    <main>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((prevNumber) => prevNumber + 1);
        }}
      >
        Increment
      </button>

      <hr />

      <h1>Toggle: {toggle ? 'ON' : 'OFF'}</h1>
      <button
        onClick={() => {
          setToggle((prevToggle) => !prevToggle);
        }}
      >
        Toggle me
      </button>
    </main>
  );
};

export default EffectDemo;
