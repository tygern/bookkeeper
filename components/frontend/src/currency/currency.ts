export function formatCurrency(n : number | undefined | null, fractionalDigits: number | null = null): string {
    if (n == undefined || isNaN(n)) {
        return formatCurrency(0)
    }

    let formattingOptions : Intl.NumberFormatOptions= {
        style: "currency",
        currency: "USD"
    };

    if (fractionalDigits != null) {
        formattingOptions.maximumFractionDigits = fractionalDigits
        formattingOptions.minimumFractionDigits = fractionalDigits
    }

    return n.toLocaleString("en-US", formattingOptions)
}
