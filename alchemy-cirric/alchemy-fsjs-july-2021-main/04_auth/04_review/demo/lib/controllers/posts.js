import { Router } from 'express';
import Comment from '../models/Comment';
import Post from '../models/Post';

export default Router()
  .post('/', (req, res, next) => {
    Post.insert(req.body)
      .then((post) => res.send(post))
      .catch(next);
  })
  .post('/:id/comments', (req, res, next) => {
    Comment.insert({ ...req.body, postId: req.params.id })
      .then((comment) => res.send(comment))
      .catch(next);
  })
  .get('/:username', (req, res, next) => {
    Post.findByAuthor(req.params.username)
      .then((posts) => res.send(posts))
      .catch(next);
  })
  .get('/:id/comments', (req, res, next) => {
    Post.findById(req.params.id)
      .then((post) => post.getComments())
      .then((post) => res.send(post))
      .catch(next);
  });
