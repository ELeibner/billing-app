import { Invoice } from '../interfaces';
import { api } from './api';

export function getInvoice(id?: number) {
    return api
        .get(typeof id === 'number' ? '/invoice/' + id : '/invoices')
        .then((res) => res.data);
}

export function addInvoice(data: Invoice) {
    return api.post('/invoice', data).then((res) => res.data);
}

export function editInvoice(data: Partial<Invoice>) {
    return api.patch('/invoice/' + data.id, data).then((res) => res.data);
}

export function deleteInvoice(id: number) {
    return api.delete(`/invoice/${id}`).then((res) => res.data);
}
