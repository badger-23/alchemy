export default class Profile {
  id;
  username;

  constructor(row) {
    this.id = row.id;
    this.username = row.username;
  }

  static async insert({ username }) {
    const row = { id: '1', username };
    return new Profile(row);
  }
}
