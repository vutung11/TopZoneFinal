import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://topzone.onrender.com/api/',
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
    },


});

axiosClient.interceptors.request.use(function (config) {
    return config;
});

axiosClient.interceptors.response.use(function (response) {
    return response.data;
});

export default axiosClient;