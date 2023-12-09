const capitalize = require('./capitalize');

test("Capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
});