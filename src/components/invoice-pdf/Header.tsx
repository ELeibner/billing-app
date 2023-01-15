import { Text, View } from '@react-pdf/renderer';
import { invoiceHeaderStyles } from './InvoicePDF.styles';

export const Header = ({ title }: { title: string }) => (
    <View style={invoiceHeaderStyles.container}>
        <Text style={{ fontSize: 20, letterSpacing: 2, color: 'gray' }}>
            {title}
        </Text>
    </View>
);
