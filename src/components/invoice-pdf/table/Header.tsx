import { Text, View } from '@react-pdf/renderer';
import { invoiceTableHeaderStyles } from './Table.styles';

export const Header = () => (
    <View style={invoiceTableHeaderStyles.container}>
        <Text style={invoiceTableHeaderStyles.no}>No.</Text>
        <Text style={invoiceTableHeaderStyles.description}>Description</Text>
        <Text style={invoiceTableHeaderStyles.quantity}>Quantity</Text>
        <Text style={invoiceTableHeaderStyles.price}>Price</Text>
        <Text style={invoiceTableHeaderStyles.amount}>Amount</Text>
    </View>
);
