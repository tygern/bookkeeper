import type {Loan} from "../loan/loan";

export function calculate(loan: Loan): Calculation {
    const monthlyRate = loan.rate / 100 / 12
    const monthlyPayment = (monthlyRate * loan.amount) / (1 - Math.pow(1 + monthlyRate, -loan.period))
    const totalPayment = monthlyPayment * loan.period
    const totalInterest = totalPayment - loan.amount

    return new Calculation(
        loan.amount,
        loan.rate,
        loan.period,
        monthlyPayment,
        totalPayment,
        totalInterest
    )
}

export class Calculation {
    constructor(
        readonly amount: number,
        readonly rate: number,
        readonly period: number,
        readonly monthlyPayment: number,
        readonly totalPayment: number,
        readonly totalInterest: number
    ) {
    }
}
