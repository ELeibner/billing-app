import { api } from './api';

export function getUserProfile() {
    return api.get('/auth/user').then((res) => {
        if (res.status === 200) return res.data;
    });
}
