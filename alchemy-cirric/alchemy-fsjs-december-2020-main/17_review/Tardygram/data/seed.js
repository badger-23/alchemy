const Comment = require('../lib/models/Comments');
const Gram = require('../lib/models/Gram');
const UserService = require('../lib/services/Userservice');

const randomNumber = (min, max) => Math.round(max / (Math.random() * max + min));

module.exports = async({ userCount = 5, gramCount = 50, commentCount = 100 } = {}) => {
  const users = await Promise.all([...Array(userCount)]
    .map((_, i) => UserService.create({
      email: `test${i}@test.com`,
      password: 'password',
      profilePhotoUrl: 'http://profileImage.com'
    })));

  const grams  = await Promise.all([...Array(gramCount)]
    .map((_, i) => Gram.insert({
      userId: Math.floor(Math.random() * users.length).id,
      photoUrl: `http://photoUrl${i}`,
      caption: 'hello',
      tags: ['hi', 'whats', 'up']
    })));

  await Promise.all([...Array(commentCount)]
    .map(() => Comment.insert({
      comment: 'hello',
      userId: Math.floor(Math.random() * users.length).id,
      gramId: grams[randomNumber(0, gramCount) - 1].id
    })));
};
