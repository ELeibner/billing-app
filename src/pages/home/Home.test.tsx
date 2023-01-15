import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

jest.mock('../../components/invoice-list/InvoiceList', () => ({
    InvoiceList: () => <div data-testid="home-invoice-list" />
}));

jest.mock('../../components/graph-list/GraphList', () => ({
    GraphList: () => <div data-testid="home-graph-list" />
}));

describe('Home page', () => {
    it('should render components', () => {
        render(
            <Router>
                <Home />
            </Router>
        );
        let item = screen.getByTestId('home-page');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('home-graph-list');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('home-recent-invoices');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('home-view-all-btn');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('home-invoice-list');
        expect(item).toBeInTheDocument();
    });
});
