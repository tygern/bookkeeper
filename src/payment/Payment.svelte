<script>
    import {formatCurrency} from '../currency/currency.js';
    import {buildPayment} from "./payment.js";

    export let mortgage;
    export let payment;

    $: payment = buildPayment(mortgage);
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
