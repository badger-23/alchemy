import React, { Component } from 'react';
import Controls from '../components/color-picker/Controls';
import Display from '../components/color-picker/Display';

class ColorPicker extends Component {
  state = {
    fgColor: '#000000',
    bgColor: '#d498cd',
    text: 'Hello, world!'
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <Controls
          fgColor={this.state.fgColor}
          bgColor={this.state.bgColor}
          text={this.state.text}
          onChange={this.handleChange}
        />
        <Display
          fgColor={this.state.fgColor}
          bgColor={this.state.bgColor}
          text={this.state.text}
        />
      </>
    );
  }
}

export default ColorPicker;
