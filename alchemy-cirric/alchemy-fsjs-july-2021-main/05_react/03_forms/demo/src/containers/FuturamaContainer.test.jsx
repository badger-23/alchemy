import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FuturamaContainer from './FuturamaContainer';

describe('FuturamaContainer', () => {
  it('should display a list of quotes by a character', async () => {
    render(<FuturamaContainer />);

    screen.getByText('Loading...');
    const ul = await screen.findByRole('list', { name: 'quotes' });
    expect(ul).toMatchSnapshot();

    const input = await screen.findByLabelText('Character Name');
    userEvent.type(input, 'Bender');

    const submitButton = await screen.findByRole('button', {
      name: 'find-quotes',
    });
    userEvent.click(submitButton);

    return waitFor(() => {
      const quotes = screen.getAllByText('- Bender', { exact: false });

      expect(quotes).toHaveLength(5);
    });
  });
});
