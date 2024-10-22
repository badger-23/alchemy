# Layering React

* Single Page Apps (SPA)
  * One HTML file
  * Changes to the view are handled by JavaScript
* Bundling with Webpack
* React
  * Components
    * modular reusable views
  * JSX
  * Rendering elements
  * Testing

## React

### Components

To better reason about our web applications its often useful to break each
page into multiple smaller views. These smaller views are called components.

In addition to being easier to reason about, these smaller components also
simplify code reuse through composition. Each component can be made up of
other components, composing a greater whole.

#### Container Components

As a rule of thumb, container components are stateful (class)
components which deal how things work.

#### Presentational Components

As a rule of thumb, presentational components are stateless
function components which deal with how things look.

### Properties

In React properties, or props, are our way to pass data to a
component. Props are passed to a component as an object. These
props are read-only, which means that we cannot (or should not)
change their values.

### State

In React state is data that can change (e.g. form inputs). This
state is stored in an object instantiated inside of a class component.
This state can only be transformed by the class component who
instantiated it. This component is considered the owner of state.

There are two ways state changes:

* state change is independent of previous state (independent)
  * forms
  * time
* state change is dependent on previous state (dependent)
  * toggles

### Data Down

In React data is passed from parent component to children components.
This means that children cannot update a parents data. It also means
that siblings cannot share data unless that data is owned by a common
parent.

```js
import React from 'react';
import PropTypes from 'prop-types'

function DisplayCount({ count }) {
  return <h1>{count}</h1>
}

DisplayCount.propTypes = {
  count: PropTypes.number.isRequired
};

export default DisplayCount;
```

```js
import React, { PureComponent } from 'react';
import DisplayCount from './DisplayCount';

export default class Count extends PureComponent {
  state = {
    count: 0
  }

  render() {
    return (
      <DisplayCount count={this.state.count} />
    )
  }
}
```

### Events Up

In order to update data a child component can emit an event. These
events are handled by the parent component who is responsible for
updating its state.

```js
import React from 'react';
import PropTypes from 'prop-types'

function DisplayCount({ count }) {
  return <h1>{count}</h1>
}

DisplayCount.propTypes = {
  count: PropTypes.number.isRequired
};

export default DisplayCount;
```

```js
import React from 'react';
import PropTypes from 'prop-types'

function IncrementCount({ incrementCount }) {
  return <button onClick={incrementCount}></button>
}

IncrementCount.propTypes = {
  incrementCount: PropTypes.func.isRequired
};

export default IncrementCount;
```

```js
import React, { PureComponent } from 'react';
import IncrementCount from './IncrementCount'
import DisplayCount from './DisplayCount';

export default class Count extends PureComponent {
  state = {
    count: 0
  }

  incrementCountHandler = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  render() {
    return (
      <>
        <IncrementCount incrementCount={this.incrementCountHandler} />
        <DisplayCount count={this.state.count} />
      </>
    )
  }
}
```
