export const fetchQuote = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const [quote] = await res.json();

  return {
    image: quote.image,
    text: quote.quote,
    name: quote.character,
  };
};
