<script>
    import MortgageInput from "./MortgageInput.svelte";
    import MortgageInfo from "./MortgageInfo.svelte";
    import Payment from "./Payment.svelte";

    export class Mortgage {
        constructor(amount, rate, period) {
            this.amount = amount;
            this.rate = rate;
            this.period = period
        }
    }

    let mortgage = new Mortgage(59_000, 1.9, 48)
</script>

<main>
    <h1>Bookkeeper</h1>

    <MortgageInput bind:mortgage/>
    <MortgageInfo bind:mortgage/>
    <Payment bind:mortgage/>
</main>

<style>
    main {
        max-width: 1000px;
        margin: 4rem auto 0 auto;
    }
</style>
