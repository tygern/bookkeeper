export function formatCurrency(number) {
    if (isNaN(number) || !number) {
        return "0";
    } else {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    }
}
