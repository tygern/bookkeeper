<script>
    import { createEventDispatcher } from 'svelte';

    export let mortgage;
    let years = mortgage.period / 12
    const dispatch = createEventDispatcher();

    $: {
        mortgage.period = years * 12;
    }

    function save() {
        dispatch('save');
    }
</script>

<form on:submit|preventDefault={save}>
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

    <button type="submit">Save search</button>
</form>


<style>
    form {
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

    button {
        margin-top: 1.1rem;
        padding: .2rem .4rem;
        background-color: var(--background-color);

        border: 1px solid var(--highlight-color);
        border-radius: 3px;

        height: fit-content;

        font-size: 1rem;
        color: var(--text-color);
    }

    button:hover {
        cursor: pointer;
    }
</style>
