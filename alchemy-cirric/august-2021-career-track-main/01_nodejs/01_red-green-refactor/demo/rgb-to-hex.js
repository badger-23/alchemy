const rgbToHex = ({ r, g, b }) => {
  // take each key from the rgb object
  // convert each value to hex
  const redHex = convertDecToHex(r);
  const greenHex = convertDecToHex(g);
  const blueHex = convertDecToHex(b);

  // join each converted value together as one
  // return joined value with hashtag
  return `#${redHex}${greenHex}${blueHex}`.toUpperCase();
};

const convertDecToHex = (decimal) => {
  return decimal.toString(16).padStart(2, '0');
};

module.exports = rgbToHex;
