import { getFilteredItem } from './get-filtered-item';

describe('get filtered item utils function', () => {
    it('should get filtered item', () => {
        const result = getFilteredItem({ id: 1, name: 'name' } as any, ['id']);
        expect(result).toEqual({ name: 'name' });
    });
});
