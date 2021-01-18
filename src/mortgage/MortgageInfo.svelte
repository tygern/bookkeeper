<script>
    import {formatCurrency} from '../currency/currency.js';

    export let mortgage;
</script>

<p>
    Borrow <strong>{formatCurrency(mortgage.amount)}</strong>
    at <strong>{formatCurrency(mortgage.rate)}%</strong> interest
    for <strong>{mortgage.period}</strong> months.
</p>

<style>
    strong {
        color: var(--warning-color);
    }
</style>
