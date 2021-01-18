<script>
    export let mortgage;

    let years = mortgage.period / 12

    $: {
        mortgage.period = years * 12;
    }
</script>

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
        Period in years
        <input type="number" bind:value={years} min=0>
    </label>
</fieldset>

<style>
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
        border: 1px solid var(--warning-color);
        border-radius: 3px;

        font-size: 1rem;
        color: var(--text-color);
    }
</style>
