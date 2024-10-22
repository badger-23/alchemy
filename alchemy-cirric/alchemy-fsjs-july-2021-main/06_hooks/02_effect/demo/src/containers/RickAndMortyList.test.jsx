import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMortyList from './RickAndMortyList';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import listData from '../fixtures/list.json';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
    return res(ctx.json(listData));
  })
);

describe('RickAndMortyList Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters on the page', async () => {
    const { container } = render(
      <MemoryRouter>
        <RickAndMortyList />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
