import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://idemo-1f664.firebaseio.com/'
});

export default instance;
