class Shapes {
    constructor(text, textColor, shape, shapeColor ) {
        this.text=text
        this.textColor= textColor
        this.shape= shape
        this.shapeColor= shapeColor
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
    }
}

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
    super(text, textColor, shape, shapeColor);
    }
}

class Circle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
   
}

module.exports={Triangle,Square,Circle}