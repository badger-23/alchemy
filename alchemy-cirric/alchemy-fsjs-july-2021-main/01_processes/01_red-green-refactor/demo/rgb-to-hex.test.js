import rgbToHex from './rgb-to-hex';

describe('rgbToHex', () => {
  it('turns a red RGB code into a hex code', () => {
    const red = { red: 255, green: 0, blue: 0 };
    const expected = '#FF0000';
    const actual = rgbToHex(red);

    expect(actual).toEqual(expected);
  });

  it('turns a blue RGB code into a hex code', () => {
    const blue = { red: 0, green: 0, blue: 255 };
    const expected = '#0000FF';
    const actual = rgbToHex(blue);

    expect(actual).toEqual(expected);
  });
});
