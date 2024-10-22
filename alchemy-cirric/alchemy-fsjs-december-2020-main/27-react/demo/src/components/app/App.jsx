import React from 'react';
import AllCharacters from '../characters/AllCharacters';
import Dog from '../dog/Dog';
import DogFn from '../dog/DogFn';
import Welcome from '../greeting/Welcome';
import Spot from '../spot/Spot';
import SpotFn from '../spot/SpotFn';
import TitleType from '../title/TitleType';
import Clickable from './Clickable';

export default function App() {
  return (
    <>
      <AllCharacters />
      <TitleType />
      <Clickable onClick={() => console.log('you clicked')} />
      <Welcome excited />
      <Spot />
      <SpotFn />

      <Dog
        name="Rover"
        age={10}
        weight="50 lbs"
      />

      <DogFn
        name="Bingo"
        age={1}
      />
    </>
  );
}
