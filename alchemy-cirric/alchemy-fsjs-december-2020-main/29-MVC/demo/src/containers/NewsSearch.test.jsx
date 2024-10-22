import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import user from '@testing-library/user-event';
import NewSearch from './NewsSearch';

// 1. mock the service
// 2. mock node-fetch
// 3. msw

const server = setupServer(
  rest.get('https://newsapi.org/v2/everything', (req, res, ctx) => {
    return res(
      ctx.json({
        articles: [
          {
            title: 'my article',
            url: 'http://myurl.com',
            urlToImage: 'http://image.com',
          },
        ],
      })
    );
  })
);

describe('NewsSearch container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('searches for articles when a search term is typed', () => {
    render(<NewSearch />);

    const searchInput = screen.getByPlaceholderText('Search here...');

    // fireEvent.input(searchInput, {
    //   target: {
    //     value: 'dogs',
    //   },
    // });

    user.type(searchInput, 'dogs');

    return waitFor(() => {
      expect(screen.getByTestId('articles')).not.toBeEmptyDOMElement();
    });
  });
});
