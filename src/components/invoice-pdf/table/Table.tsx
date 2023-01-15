import { View } from '@react-pdf/renderer';
import { InvoiceTotal, ServiceData } from '../../../interfaces';
import { Header } from './Header';
import { invoiceTableStyles } from './Table.styles';
import { TableItem } from './TableItem';
import { Total } from './Total';

interface TableProps {
    services: ServiceData[];
    total: InvoiceTotal;
}

export const Table = ({ services, total }: TableProps) => (
    <View style={invoiceTableStyles.container}>
        <Header />
        <TableItem services={services} />
        <Total total={total} />
    </View>
);
