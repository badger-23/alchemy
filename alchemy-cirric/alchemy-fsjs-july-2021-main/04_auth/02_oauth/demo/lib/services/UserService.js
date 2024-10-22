const User = require('../models/User');
const { exchangeCodeForToken, getUserProfile } = require('../utils/github');

module.exports = class UserService {
  static async create(code) {
    // 1. exchange the code for an access_token
    // -> http request (node-fetch)
    const token = await exchangeCodeForToken(code);

    // 2. get user profile from GitHub
    const profile = await getUserProfile(token);

    // 3. insert user into db
    const user = await User.findByUsername(profile.login);

    console.log('user from our db:', user);
    console.log('profile from github:', profile);

    // 4. If the user doesn't exist in our db, create them
    //    otherwise, return the existing user
    if (!user) {
      return User.insert({
        username: profile.login,
        avatarUrl: profile.avatar_url,
      });
    } else {
      return user;
    }
  }
};
