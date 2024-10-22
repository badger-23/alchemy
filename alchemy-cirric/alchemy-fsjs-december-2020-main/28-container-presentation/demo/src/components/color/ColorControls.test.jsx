import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ColorControls from './ColorControls';

describe('ColorControls component', () => {
  afterEach(() => cleanup());
  it('renders ColorControls', () => {
    const { asFragment } = render(<ColorControls
      bgColor="#FF0000"
      fgColor="#0000FF"
      text="hello"
      onChange={jest.fn()}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
