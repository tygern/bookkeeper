<script>
    import {formatCurrency} from './currency.js';

    export let mortgage;

    class Payment {
        constructor(mortgage) {
            this.mortgage = mortgage;
        }

        get monthlyPayment() {
            const monthlyRate = mortgage.rate / 100 / 12;
            return (monthlyRate * mortgage.amount) / (1 - Math.pow(1 + monthlyRate, -mortgage.period));
        }

        get totalPayment() {
            return this.monthlyPayment * mortgage.period;
        }

        get totalInterest() {
            return this.totalPayment - mortgage.amount;
        }
    }

    $: payment = new Payment(mortgage);
</script>

<h2>Payment</h2>

<p>
    You'll have a <strong>{formatCurrency(payment.monthlyPayment)} monthly payment</strong>,
</p>
<p>
    which results in paying <strong>{formatCurrency(payment.totalPayment)} in total</strong>,
</p>
<p>
    including <strong>{formatCurrency(payment.totalInterest)} in interest</strong>.
</p>

<style>
    strong {
        color: var(--highlight-color)
    }
</style>
