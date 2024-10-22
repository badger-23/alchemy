import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export default class UserService {
  static async create({ email, password }) {
    // make sure the user doesn't already exist
    const existingUser = await User.findByEmail(email);

    if (existingUser) {
      throw new Error('User already exists for the given email');
    }

    // hash the password
    const passwordHash = await bcrypt.hashSync(
      password,
      Number(process.env.SALT_ROUNDS)
    );

    // insert a user into the db with the provide email and hashed password
    return User.insert({ email, passwordHash });
  }

  static async authorize({ email, password }) {
    // find a user by email
    // check that the users exists
    // if found, check the hashed password against passwordHash from the user
    // if we have a match, then attach the cookie to the response and send back the user
    const user = await User.findByEmail(email);

    if (!user) {
      throw new Error('Invalid email/password');
    }

    const passwordsMatch = await bcrypt.compare(password, user.passwordHash);

    if (!passwordsMatch) {
      throw new Error('Invalid email/password');
    }

    return user;
  }
}
