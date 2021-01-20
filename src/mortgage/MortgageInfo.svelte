<script lang="ts">
    import {formatCurrency} from "../currency/currency"
    import type {Mortgage} from "./mortgage"

    export let mortgage: Mortgage
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
