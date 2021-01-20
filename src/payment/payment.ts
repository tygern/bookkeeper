import type {Mortgage} from "../mortgage/mortgage"

export function buildPayment(mortgage : Mortgage) : Payment {
    const monthlyRate = mortgage.rate / 100 / 12
    const monthlyPayment = (monthlyRate * mortgage.amount) / (1 - Math.pow(1 + monthlyRate, -mortgage.period))
    const totalPayment = monthlyPayment * mortgage.period
    const totalInterest = totalPayment - mortgage.amount

    return new Payment(
        monthlyPayment,
        totalPayment,
        totalInterest
    )
}

export class Payment {
    readonly monthlyPayment: number
    readonly totalPayment: number
    readonly totalInterest: number

    constructor(monthlyPayment: number, totalPayment: number, totalInterest: number) {
        this.monthlyPayment = monthlyPayment
        this.totalPayment = totalPayment
        this.totalInterest = totalInterest
    }
}
