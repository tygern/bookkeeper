export class Calculation {
    readonly amount: number
    readonly rate: number
    readonly period: number
    readonly monthlyPayment: number
    readonly totalPayment: number
    readonly totalInterest: number

    constructor(amount: number,
                rate: number,
                period: number,
                monthlyPayment: number,
                totalPayment: number,
                totalInterest: number) {
        this.amount = amount
        this.rate = rate
        this.period = period
        this.monthlyPayment = monthlyPayment
        this.totalPayment = totalPayment
        this.totalInterest = totalInterest
    }
}
