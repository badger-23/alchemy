import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import listPageOne from '../../fixtures/list1.json';
import listPageTwo from '../../fixtures/list2.json';
import characterDetail from '../../fixtures/character.json';
import App from './App';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    let response;

    if (page === '1') response = listPageOne;
    else if (page === '2') response = listPageTwo;

    return res(ctx.json(response));
  }),
  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    return res(ctx.json(characterDetail));
  })
);

describe('Rick and Morty App', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('initially displays a paginated list of characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getByAltText('Loading Rick and Mortys...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();

    const characterFromPageOne = await screen.findByText('Rick Sanchez');
    expect(characterFromPageOne).toBeInTheDocument();

    const nextPageButton = screen.getByRole('button', {
      name: 'Go to next page',
    });

    fireEvent.click(nextPageButton);

    const characterFromPageTwo = await screen.findByText('Aqua Morty');
    expect(characterFromPageTwo).toBeInTheDocument();
  });

  it('displays a character detail page', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/1']}>
        <App />
      </MemoryRouter>
    );

    screen.getByAltText('Loading Rick and Mortys...');

    const character = await screen.findByText('Rick Sanchez');
    expect(character).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
