import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NewInvoice from './NewInvoice';

jest.mock('../../components/invoice-form/InvoiceForm', () => ({
    InvoiceForm: () => <div data-testid="invoice-form" />
}));

describe('New Invoice page', () => {
    it('should render components', () => {
        render(
            <Router>
                <NewInvoice />
            </Router>
        );
        let item = screen.getByTestId('new-invoice-page');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('invoice-form');
        expect(item).toBeInTheDocument();
    });
});
