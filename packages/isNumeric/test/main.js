import isNumeric from "../src/main";

describe("isNumeric", () => {
    test("should return true for numeric values", () => {
        expect(isNumeric(42)).toBe(true);
        expect(isNumeric(-3.14)).toBe(true);
        expect(isNumeric(0)).toBe(true);
        expect(isNumeric(Number.MAX_VALUE)).toBe(true);
        expect(isNumeric(Number.MIN_VALUE)).toBe(true);
    });

    test("should return false for non-numeric values", () => {
        expect(isNumeric("Hello")).toBe(false);
        expect(isNumeric(null)).toBe(false);
        expect(isNumeric(undefined)).toBe(false);
        expect(isNumeric({})).toBe(false);
        expect(isNumeric([])).toBe(false);
        expect(isNumeric(NaN)).toBe(false);
        expect(isNumeric(Infinity)).toBe(false);
    });

    test("should return false for non-finite numbers", () => {
        expect(isNumeric(Number.POSITIVE_INFINITY)).toBe(false);
        expect(isNumeric(Number.NEGATIVE_INFINITY)).toBe(false);
    });

    test("should return true for numeric strings", () => {
        expect(isNumeric("123")).toBe(true);
        expect(isNumeric("-123.45")).toBe(true);
        expect(isNumeric("0")).toBe(true);
    });

    test("should return false for non-numeric strings", () => {
        expect(isNumeric("abc")).toBe(false);
        expect(isNumeric("123abc")).toBe(false);
    });
        test("should return false for empty or whitespace strings", () => {
        expect(isNumeric("")).toBe(false);
        expect(isNumeric(" ")).toBe(false);
        expect(isNumeric("\t")).toBe(false);
        expect(isNumeric("\n")).toBe(false);
    });

    test("should return false for objects and arrays with coercible numeric content", () => {
        expect(isNumeric(["123"])).toBe(false);        // Array, not string
        expect(isNumeric([123])).toBe(false);          // Still array
        expect(isNumeric({ value: 123 })).toBe(false); // Object
    });

    test("should return false for boolean values", () => {
        expect(isNumeric(true)).toBe(false);
        expect(isNumeric(false)).toBe(false);
    });

    test("should return false for symbols and BigInt", () => {
        expect(isNumeric(Symbol("123"))).toBe(false);
        expect(isNumeric(BigInt(123))).toBe(false);
    });

    test("should return false for functions", () => {
        expect(isNumeric(function () {})).toBe(false);
        expect(isNumeric(() => 123)).toBe(false);
    });

    test("should return false for string representations of NaN/Infinity", () => {
        expect(isNumeric("NaN")).toBe(false);
        expect(isNumeric("Infinity")).toBe(false);
        expect(isNumeric("-Infinity")).toBe(false);
    });

    test("should return true for stringified numbers with leading/trailing whitespace", () => {
        expect(isNumeric(" 42 ")).toBe(true);
        expect(isNumeric(" \t\n -3.14 ")).toBe(true);
    });
    test("should return false for strings with only whitespace", () => {
        expect(isNumeric("   ")).toBe(false);
        expect(isNumeric("\t\n")).toBe(false);
    });
});