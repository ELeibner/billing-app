import { formatPath } from './format-path';

describe('format path utils function', () => {
    it('should format path', () => {
        const result = formatPath('/invoices/new');
        expect(result).toEqual('Invoices / New');
    });
});
