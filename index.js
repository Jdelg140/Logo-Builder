const inquirer = require("inquirer");
const fs = require("fs");
let { Circle, Square, Triangle } = require("./Lib/shapes.js");
const Svg = require("./svg.js");


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
    const { shape, text, textColor, shapeColor } = answers;
    let logo;
    switch (shape) {
        case "Circle":
            logo = new Circle(shapeColor);
            console.log(logo.render());
            break;
        case "Square":
            logo = new Square(shapeColor);
            break;
        case "Triangle":
            logo = new Triangle(shapeColor);
            break;
        default:
            console.log("Invalid shape selection");
            return;
    };


    const svg = new Svg(text, logo.render(), textColor);

    fs.writeFile("./Examples/logo.svg", svg.render(), (err) => {
        if (err) {
            console.error("Error creating logo.svg:", err);
        } else {
            console.log("Generated logo.svg");
        }

    });
})





module.exports = questions


