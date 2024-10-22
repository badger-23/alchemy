import React, { Component, useState } from 'react';
import ColorControls from '../components/controls/ColorControls';
import ColorDisplay from '../components/display/ColorDisplay';

export default class ColorPicker extends Component {
  state = {
    bgColor: '#000000',
    fgColor: '#FFFFFF',
    text: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { bgColor, fgColor, text } = this.state;
    return (
      <>
        <ColorControls
          bgColor={bgColor}
          fgColor={fgColor}
          text={text}
          onChange={this.handleChange}
        />

        <ColorDisplay bgColor={bgColor} fgColor={fgColor} text={text} />
      </>
    );
  }
}

const ColorPicker = () => {
  const [bgColor, setBgColor] = useState('#000000');
  const [fgColor, setFgColor] = useState('#FFFFFF');
  const [text, setText] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'bgColor') setBgColor(target.value);
    if(target.name === 'fgColor') setFgColor(target.value);
    if(target.name === 'text') setText(target.value);
  };

  return (
    <>
      <ColorControls
        bgColor={bgColor}
        fgColor={fgColor}
        text={text}
        onChange={handleChange}
      />
      <ColorDisplay bgColor={bgColor} fgColor={fgColor} text={text} />
    </>
  );
};

export default ColorPicker;
