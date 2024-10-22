import Profile from '../models/Profile.js';

export default class ProfileService {
  static async create({ username }) {
    const profile = await Profile.insert({ username });

    const profileWithGreeting = {
      profile,
      greeting: `Hi there, ${profile.username}!`
    };

    return profileWithGreeting;
  }
}
