import isUpperCase from "../src/main.js";


it("should return true for uppercase strings", () => {
    const testCases = [
        "HELLO",
        "WORLD",
        "123",
        "ABC123",
        ["A", "B", "C"].join(""),
    ];
    testCases.forEach(testCase => {
        expect(isUpperCase(testCase)).toBe(true);
    });
});

it("should return false for lower-case strings or non-strings", () => {
    const testCases = [
        "hello",
        "Hello",
        "world",
        "Hello World",
        "abc123",
        "",
        "   ",
        false,
        null,
        undefined,
        NaN,
        {},
        [],
        [1, 2, 3],
        function() {},
        Symbol("symbol"),
        BigInt(12345678901234567890),
        new Date(),
        /regex/,
        new ArrayBuffer(8),
        new Uint8Array(8)
    ];
    testCases.forEach(testCase => {
        expect(isUpperCase(testCase)).toBe(false);
    })
});