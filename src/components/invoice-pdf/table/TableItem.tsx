import { Text, View } from '@react-pdf/renderer';
import { ServiceData } from '../../../interfaces';
import { currencyFormat } from '../../../utils/currency-format';
import { invoiceTableItemStyles } from './Table.styles';

interface TableItemProps {
    services: ServiceData[];
}

export const TableItem = ({ services }: TableItemProps) => {
    return (
        <>
            {services.map((item, index) => (
                <View style={invoiceTableItemStyles.row} key={item.name}>
                    <Text style={invoiceTableItemStyles.no}>{`${
                        index + 1
                    }.`}</Text>
                    <Text style={invoiceTableItemStyles.description}>
                        {item.name}
                    </Text>
                    <Text style={invoiceTableItemStyles.quantity}>
                        {item.quantity}
                    </Text>
                    <Text style={invoiceTableItemStyles.price}>
                        {currencyFormat(item.price!)}
                    </Text>
                    <Text style={invoiceTableItemStyles.amount}>
                        {currencyFormat(item.price! * item.quantity!)}
                    </Text>
                </View>
            ))}
        </>
    );
};
