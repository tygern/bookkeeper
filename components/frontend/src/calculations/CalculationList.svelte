<script lang="ts">
    import CalculationInfo from "./CalculationInfo.svelte";
    import {calculations} from "../Config";

    function clear() {
        calculations.clear()
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
            <CalculationInfo calculation={calculation}/>
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
        background-color: var(--warning-color);
        margin: 0;
    }
</style>
