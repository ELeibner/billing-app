export const calculateTotalAmount = (beforeTax: number, tax: number) => {
    return {
        amount: beforeTax * (1 + tax / 100),
        tax: beforeTax * (tax / 100)
    };
};
