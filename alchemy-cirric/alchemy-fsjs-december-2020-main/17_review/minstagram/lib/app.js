const express = require('express');
const app = express();

// ------------------------------------------------

app.use(express.json());
app.use(require('cookie-parser')());
app.use('/api/v1/auth', require('./controllers/auth'));
app.use('/api/v1/posts', require('./controllers/PostRoutes'));
app.use('/api/v1/comments', require('./controllers/CommentRoutes'));
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
