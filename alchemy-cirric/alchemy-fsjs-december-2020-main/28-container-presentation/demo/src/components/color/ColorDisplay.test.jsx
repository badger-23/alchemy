import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ColorDisplay from './ColorDisplay';

describe('ColorDisplay component', () => {
  afterEach(() => cleanup());
  it('renders ColorDisplay', () => {
    const { asFragment } = render(<ColorDisplay
      bgColor="#FF0000"
      fgColor="#0000FF"
      text="hello"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
