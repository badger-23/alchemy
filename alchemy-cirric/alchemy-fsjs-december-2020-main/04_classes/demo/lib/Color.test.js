const Color = require('./Color');

describe('Color class', () => {
  it('can return the color as RGB', () => {
    const red = new Color(255, 0, 0);

    expect(red.asRGB()).toEqual({
      r: 255,
      g: 0,
      b: 0
    });
  });

  it('can return the color as hex', () => {
    const green = new Color(0, 255, 0);

    expect(green.asHex()).toEqual('00FF00');
  });
});
