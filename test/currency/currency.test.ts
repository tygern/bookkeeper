import {formatCurrency} from "../../src/currency/currency";

test("formats numbers to USD", () => {
    expect(formatCurrency(18.75)).toEqual("$18.75")
    expect(formatCurrency(18)).toEqual("$18.00")
    expect(formatCurrency(18.125)).toEqual("$18.13")
    expect(formatCurrency(0)).toEqual("$0.00")
})

test("deals with bad input", () => {
    expect(formatCurrency(NaN)).toEqual("$0.00")
    expect(formatCurrency(null)).toEqual("$0.00")
    expect(formatCurrency(undefined)).toEqual("$0.00")
})
