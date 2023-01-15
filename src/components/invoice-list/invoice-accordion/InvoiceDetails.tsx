import { Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Invoice } from '../../../interfaces';
import { formatItemValue } from '../utils/format-item-value';
import { getFilteredItem } from '../utils/get-filtered-item';

function Item({ name, value }: { name: string; value: string | number }) {
    return (
        <Stack direction="row" gap={1} key={'name' + name}>
            <Typography fontWeight={600}>{`${name}:`}</Typography>
            <Typography>{formatItemValue(name, value)}</Typography>
        </Stack>
    );
}

function getList(items: Partial<Invoice>[] | Object): ReactNode {
    return Object.entries(items).map(([name, value]) => {
        if (typeof value === 'object') {
            return (
                <Stack direction="row" gap={1} key={name}>
                    <Typography fontWeight={600}>{`${name}:`}</Typography>
                    <Stack direction="column">{getList(value)}</Stack>
                </Stack>
            );
        }
        return <Item name={name} value={value} key={name} />;
    });
}

interface InvoiceDetailsProps {
    item: Invoice;
}

export function InvoiceDetails({ item }: InvoiceDetailsProps) {
    const filteredItem = getFilteredItem<Invoice>(item, ['id']);
    return (
        <Stack direction="column" gap={1}>
            {getList(filteredItem)}
        </Stack>
    );
}
