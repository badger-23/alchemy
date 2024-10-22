import loadPage from './lib/loadPage.js';
import getBooks from './lib/getBooks.js';
import saveBooks from './lib/saveBooks.js';

Promise.all(
  // [...Array(50)] creates an array of length 50, filled with undefined values
  // we aren't using the values here, we're just using the array index as a way
  // to reference all the pages we want to scrape
  [...Array(50)].map((_, index) => {
    // First, we'll load the page's HTML and get our books
    return loadPage(
      `https://books.toscrape.com/catalogue/page-${index + 1}.html`
    ).then((html) => getBooks(html));
  })
)
  // At this point, we'll have an array of 50 arrays:
  // Each inner array is a page's worth of books.
  // So we'll "flatten" the array of arrays into one single array
  .then((books) => books.flat())
  // Now that we have a single array of book objects,
  // we can save them to our database
  .then((books) => saveBooks(books)) // we could also use `.then(saveBooks)`
  // Once we're all done, we display a message
  // eslint-disable-next-line no-console
  .finally(() => console.log('All done!'));
