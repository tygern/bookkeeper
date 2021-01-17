<script>
    import { formatCurrency } from './currency.js';

    export let mortgage;

    $: monthlyRate = mortgage.rate / 100 / 12;
    $: monthlyPayment = (monthlyRate * mortgage.amount) / (1 - Math.pow(1 + monthlyRate, -mortgage.period));
    $: totalPayment = monthlyPayment * mortgage.period;
    $: totalInterest = totalPayment - mortgage.amount;

</script>

<h2>Payment</h2>

<p>
    You'll have a <strong>{formatCurrency(monthlyPayment)} monthly payment</strong>.
</p>

<p>
    This results in paying <strong>{formatCurrency(totalPayment)} in total</strong>,
    including <strong>{formatCurrency(totalInterest)} in interest</strong>.
</p>

<style>
    strong {
        color: var(--highlight-color)
    }
</style>

