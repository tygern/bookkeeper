<script>
    import {formatCurrency} from "./currency.js";

    export let calculations;
</script>

<h2>History</h2>

<ul>
    {#each calculations as calculations}
        <li>
            <p>
                <strong>{formatCurrency(calculations.amount)}</strong>
                @ <strong>{formatCurrency(calculations.rate)}%</strong>
                for <strong>{calculations.period}</strong> months.
                <br>
                Pay <strong class="highlight">{formatCurrency(calculations.monthlyPayment)}</strong>/month
                (<strong class="highlight">{formatCurrency(calculations.totalPayment)}</strong> total),
                including <strong class="highlight">{formatCurrency(calculations.totalInterest)}</strong> interest.
            </p>
        </li>
    {/each}
</ul>

<style>
    strong {
        color: var(--warning-color);
    }

    strong.highlight {
        color: var(--highlight-color);
    }
</style>
