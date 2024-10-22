const hexToDecimal = hex => Number.parseInt(hex, 16);

const getDecimalColor = (hexColor, at) => {
  const start = at * 2;
  const end = start + 2;
  const hexValue = hexColor.slice(start, end);

  return hexToDecimal(hexValue);
};

const hexToRGB = hexColor => {
  return {
    r: getDecimalColor(hexColor, 0),
    g: getDecimalColor(hexColor, 1),
    b: getDecimalColor(hexColor, 2)
  };
};

module.exports = {
  hexToRGB
};
