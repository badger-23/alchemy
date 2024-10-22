const QUOTE_COUNT = 5;

export const formatQuotes = (json) =>
  json.map((quote) => ({
    name: quote.character,
    quote: quote.quote,
    image: quote.image,
  }));

export const fetchQuotes = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const json = await res.json();

  return formatQuotes(json);
};

export const fetchQuoteByCharacter = async (characterName) => {
  const res = await fetch(
    // eslint-disable-next-line max-len
    `https://futuramaapi.herokuapp.com/api/characters/${characterName}/${QUOTE_COUNT}`
  );
  const json = await res.json();

  return formatQuotes(json);
};
