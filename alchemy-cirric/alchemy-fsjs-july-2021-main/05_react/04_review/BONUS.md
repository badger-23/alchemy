# Meme Generator using Webpack and React

 ## Description

Structure your project and build system using `webpack` and `package.json` and associated dependencies.
Follow the in-class example closely to ensure that you have all elements of the (development) build system in place. Remember all your Config files, ignore files, etc. etc.

## Features

Create a WYSIWYG editor that allows user to create a meme image with text.

User should be able to set properties and those changes are reflected in the display.

Main things:

1. Allow user to both:
   - type in a url, or
   - upload an image
   - (NOTE: you may run into `http` vs `https` issues if using an `https` image url)
2. Set the meme text for one or both:
   - header text of meme, and/or
   - footer text of meme
3. Set font, color, etc for the header and footer text
4. Export the meme image using `dom-to-image` and `file-saver`

For this assignment:

* You start with a single `App` component
* Your state will live in the `App` component. Initialize state in constructor: `state = {};`
* Use functional components to break the work of the `App` component into smaller pieces
* Write JSX in the `render` method of the `App` component
    * Use `const { key1, key2 } = this.state` to access state values
    * Remember that methods that handle events will need to be defined using class property syntax in `App`
    * Call `this.setState({ prop: newValue })` to update the state in App
* Use destructuring and other advanced javascript techniques to keep the code clean and easier to read.

## Rubric

* Functionality works for the end user **2pts**
* Idomatic React/JSX/JavaScript **4pts**
* Clean and consistent code - using destructuring and other techniques to reduce duplication and redundancy **4pts**
