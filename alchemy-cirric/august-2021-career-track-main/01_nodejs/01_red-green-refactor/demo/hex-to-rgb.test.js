const hexToRGB = require('./hex-to-rgb');

describe('hexToRGB', () => {
  it('takes a hex value of FF0000 and returns an RGB value', () => {
    const red = 'FF0000';

    expect(hexToRGB(red)).toEqual({ red: 255, green: 0, blue: 0 });
  });

  it('takes a hex value of 00FF00 and returns an RGB value', () => {
    const green = '00FF00';

    expect(hexToRGB(green)).toEqual({ red: 0, green: 255, blue: 0 });
  });
});
