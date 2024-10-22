# React Layering

## Create and render a ColorPicker component

Demo [Simple Color Picker Display](https://demo.alchemycodelab.io/simple-color-picker-display)

* create a `ColorPicker` component
  * create a button for red, yellow, and blue
  * make the background color of each button the color it represents
  * create a div who's background color is the color of the last button pressed
  * when the red button is pressed change the div to red
  * when the yellow button is pressed change the div to yellow
  * when the blue button is pressed change the div to blue
* create an `App` component that uses your `ColorPicker` component
* create an `index.js` that renders your `App` component

## Create and render a ColorPicker and ColorDisplay component

Demo [Lifted Color Picker Display](https://demo.alchemycodelab.io/lifted-color-picker-display)

* create a `ColorControls` component that takes a function to update the selected color
  * create a button for red, yellow, and blue
  * make the background color of each button the color it represents
  * when the red button is pressed change the selected color to red
  * when the yellow button is pressed change the selected color to yellow
  * when the blue button is pressed change the selected color to blue
* create a `ColorDisplay` component that takes the selected color
  * display the selected color
* create an `App` component that uses your `ColorControls` and `ColorDisplay` component
* create an `index.js` that renders your `App` component

## Create an application to display futurama quotes

Demo [Simple Futurama Quotes](http://demo.alchemycodelab.io/simple-futurama-quotes)

* create a `Quote` presentational component
  * display character, quote, and image
* create a `BenderQuote` container component
  * fetch a quote from the [futurama api](http://futuramaapi.herokuapp.com/)
* create an `App` component that uses your `BenderQuote` container
* create an `index.js` that renders your `App` component
* BONUS
  * create a `CharacterQuote` container component
    * `CharacterQuote` takes a character
    * display quote by that character
