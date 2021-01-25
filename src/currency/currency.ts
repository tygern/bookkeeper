export function formatCurrency(n : number | undefined | null): string {
    if (n == undefined || isNaN(n)) {
        return formatCurrency(0)
    }

    return n.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}
