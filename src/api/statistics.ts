import { api } from './api';

export function getStatistics() {
    return api.get('/statistics').then((res) => res.data);
}
