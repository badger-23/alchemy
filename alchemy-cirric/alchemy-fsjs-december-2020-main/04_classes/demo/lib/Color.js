class Color {
  #red;
  #green;
  #blue;

  constructor(r, g, b) {
    this.#red = r;
    this.#green = g;
    this.#blue = b;
  }

  asRGB() {
    return {
      r: this.#red,
      g: this.#green,
      b: this.#blue
    };
  }

  #convertToHex(color) {
    return color
      .toString(16)
      .padStart(2, '0')
      .toUpperCase();
  }

  asHex() {
    const red = this.#convertToHex(this.#red);
    const green = this.#convertToHex(this.#green);
    const blue = this.#convertToHex(this.#blue);

    return `${red}${green}${blue}`;
  }
}

module.exports = Color;
