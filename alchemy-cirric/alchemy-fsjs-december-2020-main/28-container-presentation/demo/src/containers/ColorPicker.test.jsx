global.fetch = require('node-fetch');

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker container', () => {
  it('changes the background color via color input', () => {
    render(<ColorPicker />);

    const display = screen.getByTestId('display');
    const bgColorInput = screen.getByLabelText('Background Color');
    
    fireEvent.change(bgColorInput, {
      target: {
        value: '#00FF00'
      }
    });

    return waitFor(() => {
      expect(display).toHaveStyle({
        backgroundColor: '#00FF00'
      });
    });
  });

  it('changes the foreground color via color input', () => {
    render(<ColorPicker />);

    const display = screen.getByTestId('display');
    const fgColorInput = screen.getByLabelText('Foreground Color');

    fireEvent.change(fgColorInput, {
      target: {
        value: '#FF0000'
      }
    });

    return waitFor(() => {
      expect(display).toHaveStyle({
        color: '#FF0000'
      });
    });
  });

  it('change the text via text input', () => {
    render(<ColorPicker />);

    const display = screen.getByTestId('display');
    const textInput = screen.getByLabelText('Text');

    fireEvent.change(textInput, {
      target: {
        value: 'hello'
      }
    });

    return waitFor(() => {
      expect(display).toHaveTextContent('hello');
    });
  });
});
