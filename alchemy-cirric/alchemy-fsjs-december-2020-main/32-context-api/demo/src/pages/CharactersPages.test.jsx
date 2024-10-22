import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import charactersApiResponse from '../fixtures/characters.json';
import { MemoryRouter } from 'react-router-dom';
import CharactersPage from './CharactersPages';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(charactersApiResponse));
  })
);

describe('CharactersPage container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('fetches and displays a list of characters', async() => {
    render(
      <MemoryRouter>
        <CharactersPage />
      </MemoryRouter>
    );

    screen.getByAltText('loading');

    const listOfCharacters = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(listOfCharacters).not.toBeEmptyDOMElement();
    });
  });
});
