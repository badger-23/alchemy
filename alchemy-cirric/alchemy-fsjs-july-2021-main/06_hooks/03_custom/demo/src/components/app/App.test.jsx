import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const server = setupServer(
  rest.get(
    'https://history.muffinlabs.com/date/:month/:day',
    (req, res, ctx) => {
      return res(
        ctx.json({
          data: { Events: [{ year: '1992', text: 'Bill got chickenpox!' }] },
        })
      );
    }
  )
);

describe('Events App', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of events for a given day', async () => {
    // default render is to the root "/" path
    const { container } = render(
      <MemoryRouter initialEntries={['/1/12']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'events' });
    // Behavioral testing an individual component
    expect(ul).not.toBeEmptyDOMElement();

    const li = screen.getByText('1992 - Bill got chickenpox!');
    // Behavioral testing an individual component
    expect(li).toBeInTheDocument();

    // Using a snapshot on the entire App
    expect(container).toMatchSnapshot();
  });

  it('renders an about page on /about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('About Page');
  });
});
