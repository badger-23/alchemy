const hexToRgb = (hex) => {
  // remove the # symbol
  const hexValue = hex.replace('#', ''); // #FF0000 -> FF0000

  // split hex value into separate parts
  // convert each part to decimal
  const red = convertHexPartToDecimal(hexValue, 0); // 'FF' -> 255
  const green = convertHexPartToDecimal(hexValue, 1); // '00' -> 0
  const blue = convertHexPartToDecimal(hexValue, 2); // '00' -> 0

  // return the object with each part's decimal value
  return { red, green, blue };
};

const convertHexPartToDecimal = (hexValue, start) => {
  const index = start * 2; // 0 -> 0, 1 -> 2, 2 -> 4
  // hexValue = 'FF0000'
  const hexPart = hexValue.slice(index, index + 2); // 'FF 00 00'

  return Number.parseInt(hexPart, 16); // 'FF' -> 255
};

export default hexToRgb;
