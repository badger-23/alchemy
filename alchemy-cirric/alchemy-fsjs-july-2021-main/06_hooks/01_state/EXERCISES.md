# React State Exercises

## Create and render an Incrementer component

Demo [Simple Incrementer](https://demo.alchemycodelab.io/simple-incrementer)

- create a `Incrementer` component
  - use hooks to keep track of the `count` of button presses
  - display the current button presses `count`
  - create a button that increments `count`
- create an `App` component that uses your `Incrementer` component
- create an `index.js` that renders your `App` component

## Name Tag

- `NameTag.js`
  - Container component
  - contains state
  - Uses the other components
- `ColorSelector.js`
  - Presentational/Functional component
  - Color input to change font color
  - Color input to change background color
- `TextSelector.js`
  - Presentational/Functional component
  - Text input
- `Shape.js`
  - Presentational/Functional component
  - takes `text`, `color` and `backgroundColor` props
  - Should display `text`
  - Should change `color` and `backgroundColor` based on props
  - HINT: Use `<div style={{ width: '100px', height: '100px' }}>` to pass in styles
