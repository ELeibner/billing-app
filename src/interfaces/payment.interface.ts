export interface PaymentData {
    type: PaymentType;
    date: Date;
    delay?: number;
}

export type PaymentType = 'Credit Card' | 'Cash';
