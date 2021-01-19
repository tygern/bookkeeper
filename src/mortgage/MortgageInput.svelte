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
        Years
        <input type="number" bind:value={years} min=0>
    </label>

    <button type="submit">Save search</button>
</form>


<style>
    form {
        display: flex;
        margin-top: 1rem;
    }

    label:not(:last-child) {
        margin-right: 1rem;
    }
</style>
