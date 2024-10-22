import React, { Component } from 'react';
import Controls from '../components/colors/Controls';
import Display from '../components/colors/Display';

export default class ColorPicker extends Component {
  state = {
    bgColor: '#FFFFFF',
    fgColor: '#0000FF',
    text: 'Hello, world!',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { bgColor, fgColor, text } = this.state;

    return (
      <>
        <Controls
          bgColor={bgColor}
          fgColor={fgColor}
          text={text}
          onChange={this.handleChange}
        />
        <Display
          bgColor={bgColor}
          fgColor={fgColor}
          text={text}
        />
      </>
    );
  }
}
