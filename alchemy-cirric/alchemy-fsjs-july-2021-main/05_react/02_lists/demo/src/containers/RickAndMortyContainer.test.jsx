// To get .env variables to work in tests:
import dotenv from 'dotenv';
dotenv.config();

import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMortyContainer from './RickAndMortyContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Mocking the API (using msw [mock service worker])
const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            id: 1,
            name: 'Rick Sanchez (from API!)',
            status: 'Alive',
            image: 'example.com/image.png',
          },
        ],
      })
    );
  })
);

// Mocking a function (using Jest)
// jest.mock('../services/rickAndMortyApi.js', () => ({
//   findCharacters: jest
//     .fn()
//     .mockResolvedValue([
//       {
//         id: 1,
//         name: 'Rick Sanchez',
//         status: 'Alive',
//         image: 'example.com/image.png',
//       },
//     ]),
// }));

describe('RickAndMortyContainer', () => {
  beforeAll(() => server.listen()); // only needed if mocking the server
  afterAll(() => server.close()); // only needed if mocking the server

  it('renders a list of characters to the page', async () => {
    render(<RickAndMortyContainer />);

    screen.getByAltText('loading spinner');

    const ul = await screen.findByRole('list', { name: 'characters' });

    expect(ul).toMatchSnapshot();
  });
});
