const { Circle, Square, Triangle } = require("./shapes.js");

test("Circle should render correctly", () => {
    const circle = new Circle("red")
    expect(circle.render()).toEqual('<circle cx="100" cy="120" r="75" fill="red"/>')
})

test("Render Square shape", () => {
    const square = new Square("blue");
    expect(square.render()).toContain('<rect x="10" y="45" height="100%" width="100%" fill="blue"/>');
});

test("Render Triangle shape", () => {
    const triangle = new Triangle("green");
    expect(triangle.render()).toContain('<polygon height="100%" width="100%" points="0,200 200,200 100,0" fill="green"/>');
});