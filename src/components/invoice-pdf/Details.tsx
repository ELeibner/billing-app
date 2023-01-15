import { Text, View } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import { Invoice } from '../../interfaces';
import { invoiceDetailsStyles } from './InvoicePDF.styles';

export const Details = ({ number, type, createdAt, payment }: Invoice) => {
    return (
        <>
            <View style={invoiceDetailsStyles.item}>
                <Text style={invoiceDetailsStyles.number}>
                    {`${type} No.: ${number}`}
                </Text>
            </View>
            <View style={invoiceDetailsStyles.item}>
                <Text>{`Date: ${dayjs(createdAt).format('DD.MM.YYYY')}`}</Text>
            </View>
            <View style={invoiceDetailsStyles.item}>
                <Text>{`Payment type: ${payment.type}`}</Text>
            </View>
            <View style={invoiceDetailsStyles.item}>
                <Text>
                    {`Payment date: ${dayjs(payment.date).format(
                        'DD.MM.YYYY'
                    )}`}
                </Text>
            </View>
        </>
    );
};
