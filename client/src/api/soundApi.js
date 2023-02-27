import axiosClient from "./axiosClient";

const soundApi = {
    getAllSound: async () => {
        const url = 'sounds';
        return await axiosClient.get(url)
    }
}

export default soundApi;