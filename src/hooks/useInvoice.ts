import { useQuery } from '@tanstack/react-query';
import { getInvoice } from '../api';

export const useInvoice = (id?: number) => {
    return useQuery({
        queryKey: [typeof id === 'number' ? 'invoice' : 'invoices'],
        queryFn: () => getInvoice(typeof id === 'number' ? id : undefined),
        refetchOnMount: 'always',
        keepPreviousData: false
    });
};
