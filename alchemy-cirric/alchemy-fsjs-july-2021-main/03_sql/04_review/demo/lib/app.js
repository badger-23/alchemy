import '../lib/models/associations.js';
import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import usersController from './controllers/users.js';
import tweetsController from './controllers/tweets.js';

const app = express();

app.use(express.json());

app.use('/api/v1/users', usersController);
app.use('/api/v1/tweets', tweetsController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
