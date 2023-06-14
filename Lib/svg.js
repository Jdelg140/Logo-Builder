const shapes = require("./shapes")

class Svg {
  constructor(text, shape, textColor) {
    this.text = text;
    this.shape = shape;
    this.textColor = textColor;
  }

  render() {
    return `
      <svg viewBox="0 0 200 200" width="300" height="200">
        ${this.shape}
        <style>
          .heavy {
            font:italic 40px serif;
            text-anchor: middle;
            alignment-baseline: middle;
          }
        </style>
        <text x="100" y="130" class="heavy" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>
      `;
  }
}

module.exports = Svg;

