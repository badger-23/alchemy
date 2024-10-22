# React Composition Exercises

## Create and render a Colors component

Demo [Simple Colors List](https://demo.alchemycodelab.io/simple-colors-list)

* create a `Colors` component that takes an array of colors
  * a color has name, hex, and rgb
  * for each color in the array create a `Color` component
  * display all `Color` components in a ul
* create an `App` component that uses your `Colors` component
* create an `index.js` that renders your `App` component

## Create and render a Sidebar component

Demo [Simple Sidebar](https://demo.alchemycodelab.io/simple-sidebar)

* create a `Sidebar` component
  * a sidebar has children that render in a `<nav>` element
* create an `App` component that uses your `Sidebar` component
* create an `index.js` that renders your `App` component

## Create and render a CreateColor component

Demo [Simple Colors Form](https://demo.alchemycodelab.io/simple-colors-form)

* create a `CreateColor` component takes an `addColor` property
  * `CreateColor` is a form with a name and color input
  * on submitting the form invoke the `addColor` property to add a new color
* create a `Colors` component that takes an array of colors
  * a color has name, hex, and rgb
  * for each color in the array create a `Color` component
  * display all `Color` components in a ul
* create a `ColorList` container that holds your state
  * store a list of colors in `ColorList` state
* create an `App` component that uses `ColorList`
* create an `index.js` that renders your `App` component
