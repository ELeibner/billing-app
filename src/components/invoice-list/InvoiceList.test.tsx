import { render, screen } from '@testing-library/react';
import { InvoiceList } from './InvoiceList';

jest.mock('./invoice-accordion/InvoiceAccordion', () => ({
    InvoiceAccordion: () => <div data-testid="invoice-accordion" />
}));

jest.mock('./invoice-accordion/InvoiceDetails', () => ({
    InvoiceDetails: () => <div data-testid="invoice-details" />
}));

jest.mock('../../hooks/useInvoice.ts', () => ({
    useInvoice: () => ({
        data: [{ id: 1 }, { id: 2 }],
        isLoading: false
    })
}));

describe('InvoiceList component', () => {
    it('should render components', () => {
        render(<InvoiceList />);
        let item = screen.getByTestId('invoice-list');
        expect(item).toBeInTheDocument();
        const items = screen.getAllByTestId('invoice-accordion');
        expect(items).toHaveLength(2);
    });
});
