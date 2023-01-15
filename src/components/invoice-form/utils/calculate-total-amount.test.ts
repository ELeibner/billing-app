import { calculateTotalAmount } from './calculate-total-amount';

describe('calculate total amount utils function', () => {
    it('should calculate total amount', () => {
        const result = calculateTotalAmount(100, 25);
        expect(result).toEqual({ amount: 125, tax: 25 });
    });
});
