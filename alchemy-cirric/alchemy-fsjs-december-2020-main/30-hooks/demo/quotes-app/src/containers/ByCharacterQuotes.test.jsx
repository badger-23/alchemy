import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ByCharacterQuotes from './ByCharacterQuotes';

describe('ByCharacterQuotes container', () => {
  it('displays quotes by a character', async () => {
    render(<ByCharacterQuotes match={{ params: { character: 'Bender' } }} />);

    screen.getByText('Loading');

    const ul = await screen.findByTestId('quotes');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
