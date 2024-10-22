import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AllQuotes from './AllQuotes';

describe('AllQuotes container', () => {
  it('displays a loading screen then a list of quotes', async () => {
    render(<AllQuotes />);

    screen.getByText('Loading');

    const ul = await screen.findByTestId('quotes');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
