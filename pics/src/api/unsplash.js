import axios  from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GIIG4yqDaV688R_SzFwGqjjv3lqTTKmuQVu3l1TYMww'
    }
});