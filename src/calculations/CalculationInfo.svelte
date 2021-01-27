<script lang="ts">
    import {formatCurrency} from "../currency/currency"
    import type {Calculation} from "./calculation";

    export let calculation: Calculation
</script>

<p>
    <strong>{formatCurrency(calculation.amount)}</strong>
    @ <strong>{formatCurrency(calculation.rate)}%</strong>
    for <strong>{calculation.period}</strong> months.
    <br>
    Pay <strong class="highlight">{formatCurrency(calculation.monthlyPayment)}</strong>/month
    (<strong class="highlight">{formatCurrency(calculation.totalPayment)}</strong> total),
    including <strong class="highlight">{formatCurrency(calculation.totalInterest)}</strong> interest.
</p>

<style>
    strong {
        color: var(--warning-color);
    }

    strong.highlight {
        color: var(--highlight-color);
    }
</style>