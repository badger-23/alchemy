# Lab: Blog

Create all the state management for a blog. All state should be stored
locally only. Here is an example: https://demo.alchemycodelab.io/redux-blog/

## Blog Action

* create `src/actions/postActions.js`
  * posts have a title and body
  * you can create a post
  * you can delete a post
  * BONUS: you can update a post by passing an id and new body

## Blog Reducers

* create `src/reducers/postReducer.js`
  * store an array of posts
  * handle create a post
  * handle delete a post
  * BONUS: handle update a post by index

## Rubric

* 3 points for actions
  * 1.5 point for each action
* 4 points for reducers
  * 1 points for each case
  * 1 point for each test
* 3 points for selectors
  * 1 point for each selector
  * 0.5 points for each test
