const hexToRGB = (hex) => {
  const red = convertHexToDec(hex, 0);
  const green = convertHexToDec(hex, 1);
  const blue = convertHexToDec(hex, 2);

  // assign each value to its corresponding object property
  return { red, green, blue };
};

const convertHexToDec = (hex, part) => {
  // take a given hex code
  // split it based on the incoming part parameter
  const startIndex = part * 2;
  const hexPart = hex.slice(startIndex, startIndex + 2);

  // convert the hex part into decimal
  return Number.parseInt(hexPart, 16);
};

module.exports = hexToRGB;
