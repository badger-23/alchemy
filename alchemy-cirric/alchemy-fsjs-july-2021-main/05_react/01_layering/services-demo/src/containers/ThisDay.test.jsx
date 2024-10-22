import React from 'react';
import { render, screen } from '@testing-library/react';
import ThisDay from './ThisDay';

jest.mock('../services/thisDayApi.js', () => ({
  fetchEvents() {
    return Promise.resolve([
      { year: '1440', text: 'Something happened' },
      { year: '1776', text: 'Another thing happened' },
    ]);
  },
}));

describe('ThisDay', () => {
  it('renders a list of events from today', async () => {
    render(<ThisDay />);

    const ul = await screen.findByRole('list');
    const li = await screen.findAllByRole('listitem'); // [elem, elem]
    
    screen.debug();

    expect(ul).not.toBeEmptyDOMElement();
    expect(li[0].textContent).toEqual('1440 - Something happened');
    expect(li[1].textContent).toEqual('1776 - Another thing happened');
  });
});
