<script lang="ts">
    import {formatCurrency} from "../currency/currency"
    import type {Loan} from "./loan"

    export let loan: Loan
</script>

<p>
    Borrow <strong>{formatCurrency(loan.amount)}</strong>
    at <strong>{formatCurrency(loan.rate)}%</strong> interest
    for <strong>{loan.period}</strong> months.
</p>

<style>
    strong {
        color: var(--warning-color);
    }
</style>
