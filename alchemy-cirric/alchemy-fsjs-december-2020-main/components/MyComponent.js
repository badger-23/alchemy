import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  state = {
    text: '',
    counter: 0
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  increment = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  render() {
    const { title } = this.props;
    const { text, counter } = this.state;

    return (
      <>
        <h1>{title} - {text} - {counter}</h1>
        <input type="text" value={text} onChange={this.handleChange} />
        <button onClick={this.increment}>Increment</button>
      </>
    )
  }
}
