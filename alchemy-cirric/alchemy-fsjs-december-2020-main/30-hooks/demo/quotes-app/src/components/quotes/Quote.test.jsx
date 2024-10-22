import React from 'react';
import { render } from '@testing-library/react';
import Quote from './Quote';

describe('Quote component', () => {
  it('matches a snapshot', () => {
    const { asFragment } = render(<Quote
      image="http://image.com"
      character="Bender"
      text="Hello"
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
