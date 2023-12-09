const calculator = require('./calculator');

test("Adds two numbers", () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test("Subtracts two numbers", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
});

test("Multiplies two numbers", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

test("Divides two numbers", () => {
    expect(calculator.divide(4, 2)).toBe(2);
});