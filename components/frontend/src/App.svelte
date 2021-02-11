<script lang="ts">
    import LoanInput from "./loan/LoanInput.svelte"
    import {Loan} from "./loan/loan"
    import CalculationList from "./calculations/CalculationList.svelte"
    import {calculate, Calculation} from "./calculations/calculation"
    import Alerts from "./alerts/Alerts.svelte"
    import {AlertStore} from "./alerts/alertStore"
    import CalculationInfo from "./calculations/CalculationInfo.svelte";
    import {calculations} from "./Config";

    let calculation: Calculation
    let loan = new Loan(59_000, 1.9, 48)
    let alerts = new AlertStore()

    $: calculation = calculate(loan)

    function save() {
        calculations.add(calculation)

        alerts.add("Saved")
    }
</script>

<header>
    <h1>Bookkeeper</h1>
</header>

<main>
    <section>
        <LoanInput bind:loan on:save={save}/>
        <CalculationInfo bind:calculation/>
    </section>

    <section>
        <CalculationList/>
    </section>

    <Alerts alerts={alerts}/>
</main>

<style>
    header {
        padding: 0 2rem;
    }

    main {
        margin: 0 auto;
        padding: 1rem 2rem 2rem;
        display: flex;
    }

    section {
        flex: 1;
    }

    section:not(:last-child) {
        margin-right: 2rem;
    }

    @media screen and (max-width: 1200px) {
        main {
            flex-direction: column;
        }

        section:not(:last-child) {
            margin-right: 0;
        }
    }

    @media screen and (max-width: 1200px) {
        header {
            padding: 0 1rem;
        }

        main {
            padding: 1rem;
        }
    }
</style>
