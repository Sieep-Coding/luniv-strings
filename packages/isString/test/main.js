import isString from "../src/main.js";


it("should return true for string literals", () => {
    const testCases = [
        "hello",
        "",
        "123",
        "true",
        "false",
        "null",
        "undefined",
        "NaN",
        " ",
        false.toString(),
        (1).toString(),
        {foo: "bar"}.toString(),
        [1, 0, 5].toString(),
        new String("hello"),
        "\n",
        "\t"
    ];
    testCases.forEach(testCases => {
        expect(isString(testCases)).toBe(true);
    })
});

it("should return false for non-string type", () => {
    const testCases = [
        123,
        true,
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
        expect(isString(testCase)).toBe(false);
    });
});