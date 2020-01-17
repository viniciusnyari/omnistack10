import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.15.5:3333', //endereço do expo (qrcode) mais a porta da api
});

export default api;