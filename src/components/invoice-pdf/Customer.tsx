import { Text, View } from '@react-pdf/renderer';
import { CustomerData } from '../../interfaces';
import { invoiceCustomerStyles } from './InvoicePDF.styles';

interface CustomerProps {
    customer: CustomerData;
}

export const Customer = ({ customer }: CustomerProps) => {
    return (
        <View style={invoiceCustomerStyles.container}>
            {customer &&
                Object.entries(customer).map(([key, value]) => (
                    <View key={key}>
                        <Text style={invoiceCustomerStyles.content}>
                            {key === 'taxId' ? `Tax ID: ${value}` : value}
                        </Text>
                    </View>
                ))}
        </View>
    );
};
