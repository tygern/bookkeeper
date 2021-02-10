<script lang="ts">
    import {createEventDispatcher} from "svelte"
    import type {Loan} from "./loan"

    export let loan: Loan
    let years = loan.period / 12
    const dispatch = createEventDispatcher()

    $: {
        loan.period = years * 12
    }

    function save() {
        dispatch('save')
    }
</script>

<form on:submit|preventDefault={save}>
    <label>
        Amount
        <input type="number" bind:value={loan.amount}>
    </label>

    <label>
        Rate
        <input type="number" bind:value={loan.rate} min=0 step=0.05>
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

    @media screen and (max-width: 1200px) {
        form {
            flex-direction: column;
        }

        label, label:not(:last-child) {
            margin-right: 0;
            margin-bottom: 1rem;
        }

        button {
            margin-top: .3rem;
        }
    }
</style>
