import hexToRgb from './hex-to-rgb';

describe('hexToRgb', () => {
  it('turns a red hex code into an RGB code', () => {
    const red = '#FF0000';
    const expected = { red: 255, green: 0, blue: 0 };
    const actual = hexToRgb(red); 

    expect(actual).toEqual(expected);
  });

  it('turns a blue hex code into an RGB code', () => {
    const blue = '#0000FF';
    const expected = { red: 0, green: 0, blue: 255 };
    const actual = hexToRgb(blue);

    expect(actual).toEqual(expected);
  });
});
