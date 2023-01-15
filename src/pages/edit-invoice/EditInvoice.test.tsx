import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EditInvoice from './EditInvoice';

jest.mock('../../components/invoice-form/InvoiceForm', () => ({
    InvoiceForm: () => <div data-testid="edit-invoice-form" />
}));

jest.mock('../../hooks/useInvoice', () => ({
    useInvoice: () => ({
        data: { id: 1 },
        isLoading: false,
        isRefetching: false
    })
}));

describe('EditInvoice page', () => {
    it('should render components', () => {
        render(
            <Router>
                <EditInvoice />
            </Router>
        );
        let item = screen.getByTestId('edit-invoice-form');
        expect(item).toBeInTheDocument();
    });
});
