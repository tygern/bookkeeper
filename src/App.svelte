<script lang="ts">
    import LoanInput from "./loan/LoanInput.svelte"
    import LoanInfo from "./loan/LoanInfo.svelte"
    import {Loan} from "./loan/loan"
    import PaymentInfo from "./payment/PaymentInfo.svelte"
    import type {Payment} from "./payment/payment";
    import CalculationList from "./calculations/CalculationList.svelte"
    import {Calculation} from "./calculations/calculation"
    import Alerts from "./alerts/Alerts.svelte"
    import {AlertStore} from "./alerts/alertStore"
    import {calculations} from "./calculations/localStorageCalculationStore";

    let payment : Payment
    let loan = new Loan(59_000, 1.9, 48)
    let alerts = new AlertStore()

    function save() {
        calculations.add(new Calculation(
            loan.amount,
            loan.rate,
            loan.period,
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
        <LoanInput bind:loan on:save={save}/>
        <LoanInfo loan={loan}/>
        <PaymentInfo loan={loan} bind:payment/>
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
