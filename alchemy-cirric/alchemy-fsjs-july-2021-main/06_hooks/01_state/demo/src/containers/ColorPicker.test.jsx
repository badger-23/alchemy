import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ColorPicker from './ColorPickerFn';

describe('ColorPicker Container', () => {
  it('displays a bgColor, fgColor, and text controls', () => {
    render(<ColorPicker />);

    const bgColorInput = screen.getByLabelText('Background Color');
    const fgColorInput = screen.getByLabelText('Foreground Color');
    const textInput = screen.getByRole('textbox', { name: 'Enter some text' });

    fireEvent.change(bgColorInput, { target: { value: '#FF0000' } });
    fireEvent.change(fgColorInput, { target: { value: '#FFFFFF' } });
    userEvent.type(textInput, '{selectall}{del}Woof woof, world!');

    return waitFor(() => {
      const display = screen.getByText('Woof woof, world!');

      expect(display).toHaveStyle({
        color: '#FFFFFF',
        backgroundColor: '#FF0000',
      });
    });
  });
});
