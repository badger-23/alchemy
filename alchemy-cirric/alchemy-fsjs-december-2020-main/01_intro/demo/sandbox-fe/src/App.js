import React, { Component } from 'react';

export default class App extends Component {
  state = {
    name: 'spot',
    age: 5,
    weight: '20 lbs'
  }

  render() {
    const { name, age, weight } = this.state;
    return (
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>Age</dt>
        <dd>{age}</dd>

        <dt>Weight</dt>
        <dd>{weight}</dd>
      </dl>
    )
  }
}
