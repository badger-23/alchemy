const parse = document => {
  const products = document.querySelectorAll('.grouped-item');

  return [...products].map(product => ({
    name: product.querySelector('.item-name').textContent,
    price: product.querySelector('.price').textContent,
    inStock: !product.querySelector('.bin-out-of-stock')
  }));
};

module.exports = parse;
