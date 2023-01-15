import { Stack } from '@mui/material';
import { useInvoice } from '../../hooks';
import { Invoice } from '../../interfaces';
import { LoadingInvoice } from '../loading';
import { InvoiceAccordion } from './invoice-accordion/InvoiceAccordion';
import { InvoiceDetails } from './invoice-accordion/InvoiceDetails';

interface InvoiceListProps {
    limit?: number;
}

export const InvoiceList = ({ limit }: InvoiceListProps) => {
    const { data, isLoading, isRefetching, refetch } = useInvoice();

    return (
        <>
            {isLoading || isRefetching ? (
                <LoadingInvoice />
            ) : (
                <Stack
                    alignItems="center"
                    data-testid="invoice-list"
                    spacing={2}
                >
                    {data && !!data.length
                        ? data.slice(0, limit).map((item: Invoice) => (
                              <InvoiceAccordion
                                  key={item.id}
                                  data={item}
                                  onDelete={refetch}
                              >
                                  <InvoiceDetails item={item} />
                              </InvoiceAccordion>
                          ))
                        : 'No invoices'}
                </Stack>
            )}
        </>
    );
};
