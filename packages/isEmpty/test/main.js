import isEmpty from "../src/main.js";


it("should return true for empty string", () => {
    const testCases = [
        "",
        " ",
        "\n",
        "\t",
        new String("")
    ];
    testCases.forEach(testCase => {
        expect(isEmpty(testCase)).toBe(true);
    });
});

it("should return false non-empty string", () => {
    const testCases = [
        "hello",
        "123",
        "true",
        "false",
        "null",
        "undefined",
        "NaN",
        "  a  ", // String with spaces but not empty
        new String("hello world") // Non-empty String object
    ];
    testCases.forEach(testCase => {
        expect(isEmpty(testCase)).toBe(false);
    });
});