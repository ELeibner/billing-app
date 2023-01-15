import dayjs from 'dayjs';
import { currencyFormat } from '../../../utils/currency-format';

const currencyTypes = ['tax', 'amount', 'price'];
const dateTypes = ['createdAt', 'date'];

export const formatItemValue = (name: string, value: any) => {
    if (dateTypes.includes(name)) return dayjs(value).format('DD/MM/YYYY');
    if (currencyTypes.includes(name)) return currencyFormat(value);
    return value;
};
