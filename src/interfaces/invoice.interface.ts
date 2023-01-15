import { CustomerData } from './customer.interface';
import { PaymentData } from './payment.interface';
import { ServiceData } from './service.interface';

export interface Invoice {
    id: number;
    number: number;
    type: InvoiceType;
    createdAt: Date;
    customer: CustomerData;
    payment: PaymentData;
    services: ServiceData[];
    total: InvoiceTotal;
}

export type InvoiceType = 'Invoice' | 'Offer';
export interface InvoiceTotal {
    amount: number;
    tax: number;
}
