<script lang="ts">
    import { fade } from "svelte/transition"
    import type {AlertStore} from "./alertStore"

    export let alerts : AlertStore
</script>

<div class="alerts">
    {#each $alerts as alert (alert.id)}
        <div class="alert" out:fade>
            {alert.message}
        </div>
    {/each}
</div>

<style>
    .alerts {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
    }

    .alert {
        padding: .5rem 1rem;
        margin-top: 1rem;

        border-radius: 5px;
        width: 10rem;

        background-color: var(--success-color);
        line-height: 1.5;
    }
</style>
