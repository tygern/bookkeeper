<script lang="ts">
    import MortgageInput from "./mortgage/MortgageInput.svelte"
    import MortgageInfo from "./mortgage/MortgageInfo.svelte"
    import {Mortgage} from "./mortgage/mortgage"
    import PaymentInfo from "./payment/PaymentInfo.svelte"
    import type {Payment} from "./payment/payment";
    import {CalculationStore} from "./history/calculationStore"
    import CalculationList from "./history/CalculationList.svelte"
    import {Calculation} from "./history/calculation"
    import Alerts from "./alerts/Alerts.svelte"
    import {AlertStore} from "./alerts/alertStore"

    let payment : Payment
    let mortgage = new Mortgage(59_000, 1.9, 48)
    let calculations = new CalculationStore(localStorage)
    let alerts = new AlertStore()

    function save() {
        calculations.add(new Calculation(
            mortgage.amount,
            mortgage.rate,
            mortgage.period,
            payment.monthlyPayment,
            payment.totalPayment,
            payment.totalInterest,
        ))

        alerts.add("Saved")
    }
</script>

<header>
    <h1>Bookkeeper</h1>
</header>

<main>
    <section>
        <MortgageInput bind:mortgage on:save={save}/>
        <MortgageInfo mortgage={mortgage}/>
        <PaymentInfo mortgage={mortgage} bind:payment/>
    </section>

    <section>
        <CalculationList calculations={calculations}/>
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
</style>
