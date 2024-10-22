import React, { Component } from 'react';

export default class TitleType extends Component {
  state = {
    title: ''
  }

  handleChange = event => {
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;

    return (
      <>
        <input type="text" value={title} onChange={this.handleChange} />
        <p>{title}</p>
      </>
    );
  }
}
