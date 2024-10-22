// A standard model, but doesn't use a database just for demonstration purposes
export default class Book {
  id;
  title;
  cover;
  price;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.cover = row.cover;
    this.price = row.price;
  }

  // eslint-disable-next-line no-unused-vars
  static async insert({ title, cover, price }) {
    // eslint-disable-next-line no-console
    console.log(`"${title}" (${price}) saved to the "cloud"`);
  }
}
