import { render, screen } from '@testing-library/react';
import { GraphList } from './GraphList';

jest.mock('./graph/Graph', () => ({
    Graph: () => <div data-testid="graph" />
}));

jest.mock('../../hooks/useStatistics', () => ({
    useStatistics: () => ({
        data: { revenue: '123', invoices: '123' },
        isLoading: false
    })
}));

describe('GraphList component', () => {
    it('should render components', () => {
        render(<GraphList type={['income', 'invoices']} />);
        let item = screen.getByTestId('graph-list');
        expect(item).toBeInTheDocument();
        const items = screen.getAllByTestId('graph');
        expect(items).toHaveLength(2);
    });
});
