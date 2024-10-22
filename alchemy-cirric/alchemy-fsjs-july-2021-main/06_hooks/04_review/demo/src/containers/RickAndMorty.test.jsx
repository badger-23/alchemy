import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import RickAndMorty from './RickAndMortyList';
import { MemoryRouter } from 'react-router';
import RickAndMortyDetail from './RickAndMortyDetail';

const getCharacterRoute = rest.get(
  'https://rickandmortyapi.com/api/character/:id',
  (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        origin: {
          name: 'Earth (C-137)',
        },
        location: {
          name: 'Earth (Replacement Dimension)',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      })
    );
  }
);

const getCharactersRoute = rest.get(
  'https://rickandmortyapi.com/api/character/',
  (req, res, ctx) => {
    return res(
      ctx.json({
        info: { pages: 34 },
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            origin: {
              name: 'Earth (C-137)',
            },
            location: {
              name: 'Earth (Replacement Dimension)',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          },
        ],
      })
    );
  }
);

const mockServer = setupServer(getCharacterRoute, getCharactersRoute);

describe('RickAndMorty Containers', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  describe('RickAndMortyList', () => {
    it('renders a list of characters on the page', async () => {
      const { container } = render(
        <MemoryRouter>
          <RickAndMorty />
        </MemoryRouter>
      );

      screen.getByAltText('Loading Rick and Mortys...');

      const ul = await screen.findByRole('list', { name: 'characters' });
      expect(ul).not.toBeEmptyDOMElement();

      // Above is similar to:
      // return waitFor(() => {
      //   const ul = screen.getByRole('list', { name: 'characters' });
      //   expect(ul).not.toBeEmptyDOMElement();
      // });

      expect(container).toMatchSnapshot();
    });
  });

  describe('RickAndMortyDetail', () => {
    it('renders a single character on the page', async () => {
      render(
        <MemoryRouter initialEntries={['/1']}>
          <RickAndMortyDetail />
        </MemoryRouter>
      );

      screen.getByAltText('Loading Rick and Mortys...');

      const character = await screen.findByText('Rick Sanchez');
      expect(character).not.toBeEmptyDOMElement();

      const characterCard = await screen.findByRole('figure', {
        name: 'character',
      });
      expect(characterCard).toMatchSnapshot();
    });
  });
});
