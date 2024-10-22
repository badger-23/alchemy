# Redux Blog

## Refactor

Refactor your blog to use redux
## Blog Combine Reducers

* create `src/actions/commentActions.js`
  * create an action to create a comment for a post (by post index)
  * create an action to delete a comment for a post (by post index and comment index)
* create `src/reducers/commentReducer.js`
  * store comments for each post (create an object where the key is a posts index)
    and the value is an array of comments
  * handle create a comment
  * handle delete a comment
  * delete post should also delete all comments

## Rubric

* refactor to redux 5 pts
* add comments 5 points
