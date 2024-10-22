import { JSDOM } from 'jsdom';

// This function takes a string of HTML, then uses JSDOM to parse it,
// pulling out the different products and creating an array of 
// book objects whose values are scraped/extracted from the HTML
export default async function getBooks(html) {
  const dom = new JSDOM(html);
  const { document } = dom.window;
  return [...document.querySelectorAll('.product_pod')].map((bookElement) => ({
    title: bookElement.querySelector('h3').textContent,
    cover: bookElement.querySelector('.image_container img').src,
    price: bookElement.querySelector('.product_price .price_color').textContent,
  }));
}
