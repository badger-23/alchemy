import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import FuturamaQuote from './FuturamaQuote';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://futuramaapi.herokuapp.com/api/quotes/1',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            character: 'Bender',
            quote: 'Great is OK, but amazing would be GREAT!',
            image: 'https://example.com/bender.png',
          },
        ])
      );
    }
  )
);

describe('FuturamaQuote Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a button that fetches a random quote', async () => {
    render(<FuturamaQuote />);

    const fetchButton = screen.getByRole('button', { name: 'Fetch a quote!' });
    fireEvent.click(fetchButton);
    // userEvent.click(fetchButton)

    return waitFor(() => {
      screen.getByText('Great is OK, but amazing would be GREAT! - Bender');
    });
  });
});
