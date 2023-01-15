import { Stack } from '@mui/material';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addInvoice } from '../../api';
import { NotificationContext } from '../../components/context-provider/notification-provider/NotificationProvider';
import { InvoiceForm } from '../../components/invoice-form/InvoiceForm';
import { Invoice } from '../../interfaces';

export default function NewInvoice() {
    const navigate = useNavigate();
    const { showSuccess } = useContext(NotificationContext);

    const methods = useForm<Invoice>({
        defaultValues: { services: [{ name: '', price: 0, quantity: 1 }] },
        reValidateMode: 'onChange'
    });

    const onSubmit: SubmitHandler<Invoice> = (data) => {
        addInvoice(data);
        showSuccess();
        navigate('/invoices');
    };

    return (
        <Stack data-testid="new-invoice-page">
            <InvoiceForm
                methods={methods}
                onSubmit={onSubmit}
                isLoading={false}
            />
        </Stack>
    );
}
