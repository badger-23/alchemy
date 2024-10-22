import React from 'react';
import { render, screen } from '@testing-library/react';
import Controls from './Controls';

describe('Controls', () => {
  it('displays a form with an input and submit button', () => {
    render(
      <Controls
        characterName="Bender"
        onCharacterNameChange={() => {}}
        onSubmit={() => {}}
      />
    );

    const controlsForm = screen.getByTestId('controls-form');
    expect(controlsForm).toMatchSnapshot();
  });
});
