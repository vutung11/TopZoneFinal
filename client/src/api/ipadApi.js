import axiosClient from "./axiosClient";

const ipadApi = {
    getAllIpad: async () => {
        const url = 'ipads';
        return await axiosClient.get(url)
    }
}

export default ipadApi;