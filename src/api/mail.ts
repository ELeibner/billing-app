import { Mail } from '../interfaces/mail.interface';
import { api } from './api';

export function sendEmail(props: Mail) {
    return api.post('/mail/send', { ...props }).then((res) => {
        if (res.status === 200) return res.data;
    });
}
