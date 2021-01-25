import {Loan} from "../../src/loan/loan";
import {buildPayment} from "../../src/payment/payment";

test("build payment", () => {
    let payment = buildPayment(new Loan(
        100_000,
        3.5,
        120
    ))

    expect(payment.monthlyPayment).toBeCloseTo(988.86)
    expect(payment.totalInterest).toBeCloseTo(18_663.04)
    expect(payment.totalPayment).toBeCloseTo(118_663.04)
})
