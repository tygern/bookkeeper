import type {Loan} from "../loan/loan"

export function buildPayment(loan: Loan): Payment {
    const monthlyRate = loan.rate / 100 / 12
    const monthlyPayment = (monthlyRate * loan.amount) / (1 - Math.pow(1 + monthlyRate, -loan.period))
    const totalPayment = monthlyPayment * loan.period
    const totalInterest = totalPayment - loan.amount

    return new Payment(
        monthlyPayment,
        totalPayment,
        totalInterest
    )
}

export class Payment {
    constructor(
        readonly monthlyPayment: number,
        readonly totalPayment: number,
        readonly totalInterest: number
    ) {
    }
}
