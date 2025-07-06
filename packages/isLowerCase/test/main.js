import isLowerCase from "../src/main.js";

it("should return false for uppercase strings", () => {
    const testCases = [
        "HELLO",
        "WORLD",
        "123",
        "ABC123",
        ["A", "B", "C"].join("")
    ];
    testCases.forEach(testCase => {
    console.log("Testing:", testCase);
    expect(isLowerCase(testCase)).toBe(false);
});

});

it("should return true for lowercase-only strings", () => {
    const testCases = [
        "hello",
        "world",
        "abc123",
        "hello world"
    ];
    testCases.forEach(testCase => {
        expect(isLowerCase(testCase)).toBe(true);
    });
});

it("should return false for mixed-case strings", () => {
    const testCases = [
        "Hello",
        "Hello World"
    ];
    testCases.forEach(testCase => {
        expect(isLowerCase(testCase)).toBe(false);
    });
});

it("should return false for non-strings and empty/whitespace strings", () => {
    const testCases = [
        "",
        "   ",
        false,
        null,
        undefined,
        NaN,
        {},
        [],
        [1, 2, 3],
        function () {},
        Symbol("symbol"),
        BigInt(12345678901234567890n),
        new Date(),
        /regex/,
        new ArrayBuffer(8),
        new Uint8Array(8)
    ];
    testCases.forEach(testCase => {
        expect(isLowerCase(testCase)).toBe(false);
    });
});
