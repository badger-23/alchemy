import React, { Component } from 'react';
import ColorControls from '../components/color/ColorControls';
import ColorDisplay from '../components/color/ColorDisplay';

export default class ColorPicker extends Component {
  state = {
    bgColor: '#FF0000',
    fgColor: '#0000FF',
    text: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

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

        <ColorDisplay
          bgColor={bgColor}
          fgColor={fgColor}
          text={text}
        />
      </>
    );
  }
}
