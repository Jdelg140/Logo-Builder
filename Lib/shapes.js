class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 200,200 100,0" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="50" y="50" height="100" width="100" fill="${this.shapeColor}"/>`;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="100" cy="100" r="50" fill="${this.shapeColor}"/>`;
    }
}

module.exports = { Triangle, Square, Circle };