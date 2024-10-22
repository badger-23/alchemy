import React, { useState } from 'react';
import { createDog } from '../../actions/dogActions';
import { useDispatch } from '../../state/DogProvider';

const DogForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [age, setAge] = useState(1);
  const [weight, setWeight] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(createDog({ name, age, weight }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={({ target }) => setAge(target.value)}
      />
      <input
        type="text"
        placeholder="Weight"
        value={weight}
        onChange={({ target }) => setWeight(target.value)} />
      <button>Create Dog</button>
    </form>
  );
};

export default DogForm;
