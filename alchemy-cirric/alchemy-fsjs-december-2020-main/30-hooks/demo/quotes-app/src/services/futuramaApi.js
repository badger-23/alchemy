export const findQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then((res) => res.json())
    .then((quotes) =>
      quotes.map(({ character, image, quote }) => ({
        character,
        image,
        text: quote,
      }))
    );
};

export const findQuotesByCharacter = (character) => {
  return fetch(`http://futuramaapi.herokuapp.com/api/characters/${character}`)
    .then((res) => res.json())
    .then((quotes) =>
      quotes.map(({ character, image, quote }) => ({
        character,
        image,
        text: quote,
      }))
    );
};
