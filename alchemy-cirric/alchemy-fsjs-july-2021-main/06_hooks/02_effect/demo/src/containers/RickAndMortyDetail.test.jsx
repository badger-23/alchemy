import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router';
import detailData from '../fixtures/detail.json';
import RickAndMortyDetail from './RickAndMortyDetail';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    return res(ctx.json(detailData));
  })
);

describe('RickAndMortyDetail', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('display a single character', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/1']}>
        <RickAndMortyDetail />
      </MemoryRouter>
    );

    screen.getByText('Loading character...');

    await screen.findByText('Rick Sanchez', { exact: false });
    expect(container).toMatchSnapshot();
  });
});
