import { render, screen } from '@testing-library/react';
import Invoices from './Invoices';

jest.mock('../../components/invoice-list/InvoiceList', () => ({
    InvoiceList: () => <div data-testid="invoice-list" />
}));

describe('NavigationBar component', () => {
    it('should render component', () => {
        render(<Invoices />);
        const item = screen.getByTestId('invoice-list');
        expect(item).toBeInTheDocument();
    });
});
