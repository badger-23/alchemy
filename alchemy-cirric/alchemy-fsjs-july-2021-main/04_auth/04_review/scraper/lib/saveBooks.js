import Book from './models/Book.js';

// This function takes an array of book objects, {title, cover, price}
// and "saves" them to the database using the Book model
export default function saveBooks(books) {
  return books.map((book) => Book.insert(book));
}
