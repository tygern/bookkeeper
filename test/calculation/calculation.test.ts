import {Loan} from "../../src/loan/loan";
import {calculate} from "../../src/calculations/calculation";

test("calculate", () => {
    let calculation = calculate(new Loan(
        100_000,
        3.5,
        120
    ))

    expect(calculation.amount).toBeCloseTo(100_000)
    expect(calculation.rate).toBeCloseTo(3.5)
    expect(calculation.period).toBeCloseTo(120)
    expect(calculation.monthlyPayment).toBeCloseTo(988.86)
    expect(calculation.totalInterest).toBeCloseTo(18_663.04)
    expect(calculation.totalPayment).toBeCloseTo(118_663.04)
})
