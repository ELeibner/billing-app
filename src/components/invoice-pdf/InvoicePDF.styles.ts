import { StyleSheet } from '@react-pdf/renderer';

import { Font } from '@react-pdf/renderer';
import robotoBold from '../../assets/fonts/Roboto-Bold.ttf';
import robotoItalic from '../../assets/fonts/Roboto-Italic.ttf';
import robotoRegular from '../../assets/fonts/Roboto-Regular.ttf';

Font.register({
    family: 'Roboto',
    fonts: [
        { src: robotoRegular },
        { src: robotoItalic, fontStyle: 'italic' },
        {
            src: robotoBold,
            fontStyle: 'bold',
            fontWeight: 600
        }
    ]
});

export const invoicePDFStyles = StyleSheet.create({
    page: {
        fontFamily: 'Roboto',
        fontSize: 12,
        padding: '48px 72px',
        lineHeight: 1.5,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});

export const invoiceHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: 16
    }
});

export const invoiceDetailsStyles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginTop: 0
    },
    number: {
        fontStyle: 'bold'
    }
});

export const invoiceCustomerStyles = StyleSheet.create({
    container: {
        margin: 16
    },
    content: {
        fontStyle: 'italic',
        marginBottom: 2
    }
});
