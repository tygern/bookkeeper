<script>
    import MortgageInput from "./MortgageInput.svelte";
    import MortgageInfo from "./MortgageInfo.svelte";
    import Payment from "./Payment.svelte";
    import CalculationList from "./CalculationList.svelte";

    class Mortgage {
        constructor(amount, rate, period) {
            this.amount = amount;
            this.rate = rate;
            this.period = period
        }
    }

    class Calculation {
        constructor(amount, rate, period, monthlyPayment, totalPayment, totalInterest) {
            this.amount = amount;
            this.rate = rate;
            this.period = period;
            this.monthlyPayment = monthlyPayment;
            this.totalPayment = totalPayment;
            this.totalInterest = totalInterest;
        }
    }

    let mortgage = new Mortgage(59_000, 1.9, 48);
    let payment;
    let calculations = [];

    function save() {
        calculations = [...calculations, new Calculation(
            mortgage.amount,
            mortgage.rate,
            mortgage.period,
            payment.monthlyPayment,
            payment.totalPayment,
            payment.totalInterest,
        )]
    }
</script>

<main>
    <h1>Bookkeeper</h1>

    <MortgageInput bind:mortgage on:save={save}/>
    <MortgageInfo mortgage={mortgage}/>
    <Payment mortgage={mortgage} bind:payment/>
    <CalculationList bind:calculations/>
</main>

<style>
    main {
        max-width: 1000px;
        margin: 2rem auto 0 auto;
    }
</style>
