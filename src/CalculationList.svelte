<script>
    import {formatCurrency} from "./currency.js";

    export let calculations;

    function clear() {
        calculations.clear();
    }
</script>


<h2>
    History

    {#if $calculations.length > 0}
        <button type="button" on:click={clear}>Clear history</button>
    {/if}
</h2>

<ul>
    {#each $calculations as calculation}
        <li>
            <p>
                <strong>{formatCurrency(calculation.amount)}</strong>
                @ <strong>{formatCurrency(calculation.rate)}%</strong>
                for <strong>{calculation.period}</strong> months.
                <br>
                Pay <strong class="highlight">{formatCurrency(calculation.monthlyPayment)}</strong>/month
                (<strong class="highlight">{formatCurrency(calculation.totalPayment)}</strong> total),
                including <strong class="highlight">{formatCurrency(calculation.totalInterest)}</strong> interest.
            </p>
        </li>
    {/each}
</ul>

<style>
    h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        border-color: var(--warning-color);
        margin: 0;
    }

    strong {
        color: var(--warning-color);
    }

    strong.highlight {
        color: var(--highlight-color);
    }
</style>
