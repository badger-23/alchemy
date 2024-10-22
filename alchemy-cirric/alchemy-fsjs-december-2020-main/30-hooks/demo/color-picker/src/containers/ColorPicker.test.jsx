import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker container', () => {
  it('change colors and text and see a new display', () => {
    render(<ColorPicker />);

    const bgInput = screen.getByLabelText('Background Color');
    const fgInput = screen.getByLabelText('Foreground Color');
    const textInput = screen.getByLabelText('Text');

    const display = screen.getByTestId('display');

    fireEvent.change(bgInput, {
      target: {
        value: '#FF0000',
      },
    });

    fireEvent.change(fgInput, {
      target: {
        value: '#0000FF',
      },
    });

    fireEvent.change(textInput, {
      target: {
        value: 'hello',
      },
    });

    return waitFor(() => {
      expect(display).toHaveStyle({
        backgroundColor: '#FF0000',
        color: '#0000FF',
      });
      expect(display).toHaveTextContent('hello');
    });
  });
});
