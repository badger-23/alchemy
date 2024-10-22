import React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from './Quote';

describe('Quote', () => {
  it('displays a quote', () => {
    render(
      <Quote name="spot" quote="woof woof" image="example.com/image.png" />
    );

    const quote = screen.getByText('woof woof - spot');
    expect(quote).toMatchSnapshot();
  });
});
