import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { editInvoice } from '../../api';
import { NotificationContext } from '../../components/context-provider/notification-provider/NotificationProvider';
import { InvoiceForm } from '../../components/invoice-form/InvoiceForm';
import { useInvoice } from '../../hooks/useInvoice';
import { Invoice } from '../../interfaces';

export default function EditInvoice() {
    const navigate = useNavigate();
    const { showSuccess } = useContext(NotificationContext);

    const { id } = useParams();
    const { data, isLoading, isRefetching } = useInvoice(Number(id));

    const methods = useForm<Invoice>({
        ...(data && {
            defaultValues: {
                ...data
            }
        }),
        reValidateMode: 'onChange'
    });

    useEffect(() => {
        if (!isRefetching || !isLoading) {
            methods.reset(data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRefetching, isLoading, methods]);

    const onSubmit: SubmitHandler<Invoice> = (data) => {
        editInvoice(data);
        showSuccess();
        navigate('/invoices');
    };

    return (
        <InvoiceForm
            methods={methods}
            onSubmit={onSubmit}
            isLoading={isLoading}
        />
    );
}
