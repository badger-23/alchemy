import User from './User.js';
import Tweet from './Tweet.js';

User.hasMany(Tweet);
Tweet.belongsTo(User);
