import React, { useState } from 'react';
import Controls from '../components/colors/Controls';
import Display from '../components/colors/Display';

const ColorPicker = () => {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [fgColor, setFgColor] = useState('#0000FF');
  const [text, setText] = useState('Hello, world!');

  const handleChange = ({ target }) => {
    if(target.name === 'bgColor') setBgColor(target.value);
    if(target.name === 'fgColor') setFgColor(target.value);
    if(target.name === 'text') setText(target.value);
  };

  return (
    <>
      <Controls
        bgColor={bgColor}
        fgColor={fgColor}
        text={text}
        onChange={handleChange}
      />
      <Display bgColor={bgColor} fgColor={fgColor} text={text} />
    </>
  );
};

export default ColorPicker;
