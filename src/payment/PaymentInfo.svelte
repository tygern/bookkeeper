<script lang="ts">
    import {formatCurrency} from "../currency/currency"
    import {buildPayment, Payment} from "./payment"
    import type {Mortgage} from "../mortgage/mortgage"

    export let mortgage: Mortgage
    export let payment: Payment

    $: payment = buildPayment(mortgage)
</script>

<h2>Payment</h2>

<p>
    You'll have a <strong>{formatCurrency(payment.monthlyPayment)} monthly payment</strong>,
</p>
<p>
    which results in paying <strong>{formatCurrency(payment.totalPayment)} in total</strong>,
</p>
<p>
    including <strong>{formatCurrency(payment.totalInterest)} in interest</strong>.
</p>

<style>
    strong {
        color: var(--highlight-color)
    }
</style>
