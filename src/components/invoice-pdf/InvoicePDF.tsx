import { Document, Page, View } from '@react-pdf/renderer';
import { Invoice } from '../../interfaces';
import { Customer } from './Customer';
import { Details } from './Details';
import { Header } from './Header';
import { invoicePDFStyles } from './InvoicePDF.styles';
import { Table } from './table/Table';

interface InvoicePDFProps {
    data: Invoice;
}

export const InvoicePDF = ({ data }: InvoicePDFProps) => {
    return (
        <Document>
            <Page size="A4" style={invoicePDFStyles.page}>
                <View>
                    <Header title={data.type} />
                    <Details {...data} />
                    <Customer customer={data.customer} />
                    <Table services={data.services} total={data.total} />
                </View>
            </Page>
        </Document>
    );
};
