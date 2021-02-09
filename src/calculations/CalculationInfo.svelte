<script lang="ts">
    import {formatCurrency} from "../currency/currency"
    import type {Calculation} from "./calculation";

    export let calculation: Calculation
</script>

<div class="card">
    <div class="data">
        <div>
            Borrow <strong>{formatCurrency(calculation.amount)}</strong> at
        </div>

        <div>
            <span class="main">{calculation.rate}%</span>
            for <strong>{calculation.period}</strong> months
        </div>
    </div>

    <div class="data highlight">
        <div>
            <span class="main">{formatCurrency(calculation.monthlyPayment, 0)}</span> per month
        </div>
        <div>
            (<strong>{formatCurrency(calculation.totalInterest)}</strong> total interest)
        </div>
    </div>
</div>

<style>
    .card {
        display: flex;

        padding: .75rem;
        margin-top: 1rem;

        border-radius: 7px;

        box-shadow: 0 2px 5px 0 var(--shadow-color), 0 2px 10px 0 var(--shadow-color);
    }

    @media (prefers-color-scheme: dark) {
        .card {
            background-color: var(--shadow-color);
        }
    }

    .card .data {
        flex: 1;

        display: flex;
        flex-direction: column;
    }

    .data > div:not(:last-child) {
        margin-bottom: .5rem;
    }

    .main {
        font-weight: 700;
        font-size: 2.5rem;
        color: var(--warning-color);
    }

    strong {
        color: var(--warning-color);
    }

    .highlight {
        text-align: right;
    }

    .highlight .main {
        color: var(--highlight-color);
    }

    .highlight strong {
        color: var(--highlight-color);
    }
</style>