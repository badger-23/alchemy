// rgbToHex({ red: 0, green: 0, blue: 255 })
// => rgb.red -> 0
const rgbToHex = ({ red, green, blue }) => {
  // rgb = { red: 0, green: 0, blue: 255 }
  // convert each value to hexadecimal -> { red: '00', green: '00', blue: 'FF' }
  const redHex = convertDecimalToHex(red); // 0 -> '00'
  const greenHex = convertDecimalToHex(green); // 0 -> '00'
  const blueHex = convertDecimalToHex(blue); // 255 -> 'ff'

  // smash it together and add a hashtag -> '#0000FF'
  const hex = `#${redHex}${greenHex}${blueHex}`.toUpperCase();

  return hex;
};

const convertDecimalToHex = (value) => {
  return value.toString(16).padStart(2, '0');
};

export default rgbToHex;
