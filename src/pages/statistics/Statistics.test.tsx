import { render, screen } from '@testing-library/react';
import Statistics from './Statistics';

jest.mock('../../components/graph-list/GraphList', () => ({
    GraphList: () => <div data-testid="graph-list" />
}));

describe('Statistics page', () => {
    it('should render components', () => {
        render(<Statistics />);
        const items = screen.getByTestId('statistics-page');
        expect(items).toBeInTheDocument();
    });
});
