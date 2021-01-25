import {Mortgage} from "../../src/mortgage/mortgage";
import {buildPayment} from "../../src/payment/payment";

test("build payment", () => {
    let mortgage = new Mortgage(
        100_000,
        3.5,
        120
    )

    let payment = buildPayment(mortgage)

    expect(payment.monthlyPayment).toBeCloseTo(988.86)
    expect(payment.totalInterest).toBeCloseTo(18_663.04)
    expect(payment.totalPayment).toBeCloseTo(118_663.04)
})
