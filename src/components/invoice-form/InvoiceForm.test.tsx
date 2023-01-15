import { render, screen } from '@testing-library/react';
import { InvoiceForm } from './InvoiceForm';

jest.mock('./form/DetailsForm', () => ({
    DetailsForm: () => <div data-testid="invoice-form-details" />
}));
jest.mock('./form/PaymentForm', () => ({
    PaymentForm: () => <div data-testid="invoice-form-payment" />
}));
jest.mock('./form/CustomerForm', () => ({
    CustomerForm: () => <div data-testid="invoice-form-customer" />
}));
jest.mock('./form/ServicesForm', () => ({
    ServicesForm: () => <div data-testid="invoice-form-services" />
}));
jest.mock('./form/Total', () => ({
    Total: () => <div data-testid="invoice-form-total" />
}));

describe('InvoiceForm component', () => {
    it('should render components', () => {
        render(
            <InvoiceForm
                methods={
                    {
                        handleSubmit: () => {},
                        formState: { isValid: true },
                        getValues: (el: string) => {},
                        setValue: () => {}
                    } as any
                }
                onSubmit={() => {}}
                isLoading={false}
            />
        );
        let item = screen.getByTestId('invoice-form-details');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('invoice-form-payment');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('invoice-form-customer');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('invoice-form-services');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('invoice-form-total');
        expect(item).toBeInTheDocument();
        item = screen.getByTestId('invoice-form-submit-btn');
        expect(item).toBeInTheDocument();
    });
});
