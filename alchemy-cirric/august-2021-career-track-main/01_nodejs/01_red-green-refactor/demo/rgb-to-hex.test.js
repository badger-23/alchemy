const rgbToHex = require('./rgb-to-hex');

describe('rgbToHex', () => {
  it('takes an RGB object representing red and returns its hex equivalent', () => {
    const red = rgbToHex({ r: 255, g: 0, b: 0 });

    expect(red).toEqual('#FF0000');
  });

  it('takes an RGB object representing dark green and returns its hex equivalent', () => {
    const darkGreen = rgbToHex({ r: 0, g: 128, b: 0 });

    expect(darkGreen).toEqual('#008000');
  });
});
