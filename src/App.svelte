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

<main>
    <h1>Bookkeeper</h1>

    <MortgageInput bind:mortgage on:save={save}/>
    <MortgageInfo mortgage={mortgage}/>
    <Payment mortgage={mortgage} bind:payment/>
    <CalculationList calculations={calculations}/>

    <Alerts alerts={alerts}/>
</main>

<style>
    main {
        max-width: 1000px;
        margin: 2rem auto 0 auto;
    }
</style>
