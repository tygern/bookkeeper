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
