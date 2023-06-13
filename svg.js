class Svg {
    constructor(text, shape, textColor) {
      this.text = text;
      this.shape = shape;
      this.textColor = textColor;
    }
  
    render() {
      return `<svg viewBox="0 0 200 200" width="300" height="200">
                ${this.shape}
                <text x="20" y="35" class="small">${this.text} ${this.textColor}</text>
              </svg>`;
    }
  }
  
  module.exports = Svg;

