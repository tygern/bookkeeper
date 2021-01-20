export function formatCurrency(n : number): string {
    if (isNaN(n) || !n) {
        return "0"
    } else {
        return n.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }
}
