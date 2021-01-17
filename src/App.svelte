<script>
    import {Mortgage} from './mortgage.js';
    import {formatCurrency} from './currency.js';
    import Payment from "./Payment.svelte";

    let mortgage = new Mortgage(59_000, 1.9, 48)
    let years = mortgage.period / 12

    $: {
        mortgage.period = years * 12;
    }
</script>

<main>
    <h1>Bookkeeper</h1>

    <fieldset>
        <label>
            Amount
            <input type="number" bind:value={mortgage.amount}>
        </label>

        <label>
            Rate
            <input type="number" bind:value={mortgage.rate} min=0 step=0.05>
        </label>

        <label>
            Period
            <input type="number" bind:value={years} min=0>
        </label>
    </fieldset>

    <p>
        Borrow {formatCurrency(mortgage.amount)} at {formatCurrency(mortgage.rate)}% interest for {mortgage.period}
        months.
    </p>

    <Payment bind:mortgage="{mortgage}"/>
</main>

<style>
    main {
        max-width: 1000px;
        margin: 4rem auto 0 auto;
    }

    fieldset {
        display: flex;
        margin-top: 1rem;
    }

    label {
        font-size: .6rem;
        flex: 1;
    }

    label:not(:last-child) {
        margin-right: 1rem;
    }

    input {
        display: block;
        margin-top: .5rem;
        padding: .2rem .4rem;
        width: 100%;
        background-color: var(--background-color);

        outline: none;
        border: 1px solid var(--highlight-color);
        border-radius: 3px;

        font-size: 1rem;
        color: var(--text-color);
    }
</style>
