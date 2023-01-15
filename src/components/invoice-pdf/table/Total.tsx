import { Text, View } from '@react-pdf/renderer';
import { InvoiceTotal } from '../../../interfaces';
import { currencyFormat } from '../../../utils/currency-format';
import { invoiceTableTotalStyles } from './Table.styles';

interface TotalProps {
    total: InvoiceTotal;
}

export const Total = ({ total }: TotalProps) => {
    return (
        <>
            <View style={invoiceTableTotalStyles.item}>
                <Text style={invoiceTableTotalStyles.description}>
                    Tax (25%):
                </Text>
                <Text style={invoiceTableTotalStyles.content}>
                    {currencyFormat(total.tax)}
                </Text>
            </View>
            <View style={invoiceTableTotalStyles.totalContainer}>
                <Text style={invoiceTableTotalStyles.description}>Total:</Text>
                <Text style={invoiceTableTotalStyles.total}>
                    {currencyFormat(total.amount)}
                </Text>
            </View>
        </>
    );
};
