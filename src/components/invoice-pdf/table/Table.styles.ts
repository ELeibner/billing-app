import { StyleSheet } from '@react-pdf/renderer';

export const invoiceTableStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 4
    }
});

export const invoiceTableRatio = {
    no: '7.5%',
    description: '60%',
    quantity: '12.5%',
    price: '15%',
    amount: '20%'
};

export const invoiceTableHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        border: 1,
        height: 24,
        fontStyle: 'bold',
        alignItems: 'center',
        textAlign: 'center'
    },
    no: {
        width: invoiceTableRatio['no'],
        borderRight: 1
    },
    description: {
        width: invoiceTableRatio['description'],
        borderRight: 1
    },
    quantity: {
        width: invoiceTableRatio['quantity'],
        borderRight: 1
    },
    price: {
        width: invoiceTableRatio['price'],
        borderRight: 1
    },
    amount: {
        width: invoiceTableRatio['amount']
    }
});

export const invoiceTableItemStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderWidth: 1,
        borderTop: 0,
        alignItems: 'center',
        textAlign: 'center',
        minHeight: 24
    },
    no: {
        width: invoiceTableRatio['no'],
        paddingRight: 4
    },
    description: {
        width: invoiceTableRatio['description'],
        flexDirection: 'column',
        padding: '0px 40px 0px 4px',
        textAlign: 'left'
    },
    quantity: {
        width: invoiceTableRatio['quantity'],
        paddingRight: 4
    },
    price: {
        width: invoiceTableRatio['price'],
        paddingRight: 4
    },
    amount: {
        width: invoiceTableRatio['amount'],
        paddingRight: 4
    }
});

export const invoiceTableTotalStyles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1
    },
    description: {
        width: '85%',
        textAlign: 'right',
        paddingRight: 4
    },
    content: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 4
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1,
        fontStyle: 'bold',
        textTransform: 'uppercase'
    },
    total: {
        width: '15%',
        fontSize: 14,
        textAlign: 'right',
        paddingRight: 4
    }
});
