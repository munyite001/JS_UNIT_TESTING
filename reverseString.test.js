const reverseString = require('./reverseString');

test("Reverses a string", () => {
    expect(reverseString("HELLO")).toBe("OLLEH");
});