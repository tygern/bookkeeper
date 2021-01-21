import {Payment} from "../src/payment/payment"

test("placeholder", () => {
    let payment = new Payment(0,0,0)
    let otherPayment = new Payment(0,0,0)

    expect(payment).toEqual(otherPayment)
})
