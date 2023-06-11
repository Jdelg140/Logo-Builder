const inquirer = require("inquirer")
const fs = require("fs")
const { Circle, Square, Triangle } = require("./Lib/shapes.js")

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter at most three charaters for the logo"
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter text color, keyword or hexadecimal number"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo",
        choices: ["Triangle", "Circle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for the shape of your logo, keyword or hexadecimal number"
    }
]

inquirer.prompt(questions).then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;

    let logo;
    switch (shape) {
        case "Circle":
            logo = new Circle(shapeColor,textColor,text,shape);
            break;
        case "Square":
            logo = new Square(shapeColor,textColor,text,shape);
            break;
        case "Triangle":
            logo = new Triangle(shapeColor,textColor,text,shape);
            break;
        default:
            console.log("Invalid shape selection");
            return;
    }
})

