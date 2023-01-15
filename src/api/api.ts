import axios from 'axios';

export const baseUrl = 'https://demo-billing-app.leibner.ch/api';

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
    },
    withCredentials: true
});
