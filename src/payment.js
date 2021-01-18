export function buildPayment(mortgage) {
    const monthlyRate = mortgage.rate / 100 / 12;
    const monthlyPayment = (monthlyRate * mortgage.amount) / (1 - Math.pow(1 + monthlyRate, -mortgage.period));
    const totalPayment = monthlyPayment * mortgage.period;
    const totalInterest = totalPayment - mortgage.amount;

    return new Payment(
        monthlyPayment,
        totalPayment,
        totalInterest
    )
}

export class Payment {
    constructor(monthlyPayment, totalPayment, totalInterest) {
        this.monthlyPayment = monthlyPayment;
        this.totalPayment = totalPayment;
        this.totalInterest = totalInterest;
    }
}
