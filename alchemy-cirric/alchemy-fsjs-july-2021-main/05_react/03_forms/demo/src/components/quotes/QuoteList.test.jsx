import React from 'react';
import { render, screen } from '@testing-library/react';
import QuoteList from './QuoteList';

describe('QuoteList', () => {
  it('displays a list of quotes', () => {
    render(
      <QuoteList
        // someObj={{ name: "spot" }}
        quotes={[
          {
            name: 'Bender',
            quote: 'Bite my shiny metal ass.',
            image: 'example.com/image.png',
          },
          {
            name: 'Fry',
            quote:
              // eslint-disable-next-line max-len
              '...it\'s what seperates humans and robots from animals and animal robots.',
            image: 'example.com/image.png',
          },
        ]}
      />
    );

    const ul = screen.getByRole('list', { name: 'quotes' });
    expect(ul).toMatchSnapshot();
  });
});
