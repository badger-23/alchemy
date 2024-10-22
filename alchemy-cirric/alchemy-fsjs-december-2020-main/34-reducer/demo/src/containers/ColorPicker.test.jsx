import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker container', () => {
  it('changes the color', async() => {
    render(<ColorPicker />);

    const bgColorInput = screen.getByLabelText('Background Color');
    const fgColorInput = screen.getByLabelText('Foreground Color');
    const textInput = screen.getByLabelText('Text');

    fireEvent.change(bgColorInput, {
      target: {
        value: '#FF0000'
      }
    });

    fireEvent.change(fgColorInput, {
      target: {
        value: '#00FF00'
      }
    });

    fireEvent.change(textInput, {
      target: {
        value: 'hello'
      }
    });

    const display = await screen.findByText('hello');

    expect(display).toHaveStyle({
      backgroundColor: '#FF0000',
      color: '#00FF00'
    });
  });
});
