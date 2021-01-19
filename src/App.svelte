<script>
    import MortgageInput from "./mortgage/MortgageInput.svelte";
    import MortgageInfo from "./mortgage/MortgageInfo.svelte";
    import {Mortgage} from "./mortgage/mortgage.js";
    import Payment from "./payment/Payment.svelte";
    import CalculationList from "./history/CalculationList.svelte";
    import {calculationStore} from "./history/calculationStore.js"
    import {Calculation} from "./history/calculation.js";
    import Alerts from "./alerts/Alerts.svelte";
    import {alertStore} from "./alerts/alertStore.js"

    let mortgage = new Mortgage(59_000, 1.9, 48);
    let payment;
    let calculations = calculationStore();
    let alerts = alertStore();

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
        <Payment mortgage={mortgage} bind:payment/>
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
