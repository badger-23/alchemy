import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dog.css';

// name
// age
// weight

export default class Dog extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    weight: PropTypes.string.isRequired
  }

  render() {
    const { name, age, weight } = this.props;

    return (
      <dl className={styles.Dog}>
        <dt>Name</dt>
        <dd>{name}</dd>

        <dt>Age</dt>
        <dd>{age}</dd>

        <dt>Weight</dt>
        <dd>{weight}</dd>
      </dl>
    );
  }
}
