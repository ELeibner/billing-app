import { Button, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { Invoice } from '../../interfaces';
import { LoadingForm } from '../loading';
import { CustomerForm } from './form/CustomerForm';
import { DetailsForm } from './form/DetailsForm';
import { PaymentForm } from './form/PaymentForm';
import { ServicesForm } from './form/ServicesForm';
import { Total } from './form/Total';
import { calculateTotalAmount } from './utils/calculate-total-amount';

interface InvoiceFormProps {
    methods: UseFormReturn<Invoice, any>;
    onSubmit: SubmitHandler<Invoice>;
    isLoading: boolean;
}

export function InvoiceForm({
    methods,
    onSubmit,
    isLoading
}: InvoiceFormProps) {
    const handleChange = () => {
        const services = methods.getValues('services');
        if (services) {
            const sum = services.reduce(
                (prev: any, curr: any) =>
                    prev + Number(curr.price) * Number(curr.quantity),
                0
            );
            const total = calculateTotalAmount(sum, 25);
            methods.setValue('total.amount', total.amount);
            methods.setValue('total.tax', total.tax);
        }
        const paymentDate = methods.getValues('payment.date');
        const createdAt = methods.getValues('createdAt');
        if (paymentDate || createdAt) {
            methods.setValue(
                'payment.delay',
                dayjs(paymentDate).diff(createdAt, 'days')
            );
        }
    };
    return (
        <>
            {isLoading ? (
                <LoadingForm />
            ) : (
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                        onChange={handleChange}
                        onBlur={handleChange}
                        onKeyDown={(event) => {
                            if (event.code === 'Enter') {
                                event.preventDefault();
                            }
                        }}
                    >
                        <Stack direction="column" spacing={2}>
                            <DetailsForm />
                            <PaymentForm />
                            <CustomerForm />
                            <ServicesForm />
                            <Total />
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={!methods.formState.isValid}
                                data-testid="invoice-form-submit-btn"
                            >
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </FormProvider>
            )}
        </>
    );
}
