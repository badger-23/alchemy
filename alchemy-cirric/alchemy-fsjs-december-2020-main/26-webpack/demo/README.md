# Webpack and React

* island problem code along
* `DisjointSet` (union-find Data Structure)
  * `find`
  * `union`
* using a `DisjointSet` in place of visited
* webpack
  * show entry/output `npm run build`
    * remove `[hash]` and add `[hash]`
    * change code, how does that change `[hash]`
    * explore the bundle js file
      * `console.log`
      * simple variable
      * computed variable
      * simple single use function
      * simple multi use function
      * import single use function
      * import multi use function
  * loaders
    * babel
      * optional chaining
      * class properties with `speak`
    * css
      * create `.red` class apply it to h1
        * see css in js
        * class name is randomized
    * images
      * import large image
      * import small image
  * plugins
    * html plugin
      * explore `index.html`
    * clean webpack plugin
      * remove it and watch files multiply
  * show dev server `npm start`
    * change ports
    * change js files
* react
  * jsx
    * create an h1
    * create an h1 with title variable
    * create a button
    * create a button with text variable
    * create a clickable button
  * components
    * details/summary component `Expandable` with title/body
    * `Interview` component
