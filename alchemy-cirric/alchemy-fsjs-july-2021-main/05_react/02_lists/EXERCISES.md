# React Lists

## Create and render a PhotoAlbum component

Demo [Simple Photo Album](https://demo.alchemycodelab.io/simple-photo-album)

* create a `Photo` component
  * `Photo` takes a photo property and displays an img
* create a `Photos` component
  * `Photos` takes an array of photos and creates a `Photo` for each
  * display all `Photo` components in a ul
* create a `PhotoAlbum` component
  * `PhotoAlbum` takes a title and an array of photos as properties
  * display the title of the album
  * display all photos using the `Photos` component
* create a `Header` component
  * display the title of your photo album site
* create a `Footer` component
  * display your name in the footer
* create an `App` component that brings these components together
* create an `index.js` that renders your `App` component
* **NOTE** use semantic HTML (header, footer, section, etc tags)

## Create an application to display Rick and Morty Characters

Demo [Simple Rick And Morty](http://demo.alchemycodelab.io/simple-rick-and-morty)

* create a `Character` presentational component
  * display name, status, species, and image
* create a `Characters` presentational component
* create an `AllCharacters` container component
  * fetch characters from [https://rickandmortyapi.com/api/character/](https://rickandmortyapi.com/api/character/)
* create an `App` component that uses your `AllCharacters` component
* create an `index.js` that renders your `App` component
