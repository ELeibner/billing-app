import { currencyFormat } from './currency-format';

describe('currency format utils function', () => {
    it('should format to euro currency', () => {
        const result = currencyFormat(123456.78);
        expect(result).toEqual('€123,456.78');
    });
});
