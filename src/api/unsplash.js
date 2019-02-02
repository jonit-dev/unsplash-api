import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f2b293ee91c0137469c8543ebd436236b842a7ef4ed3cfd46713231ea0d47cde'
    }
});