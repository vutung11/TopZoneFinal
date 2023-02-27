import axiosClient from "./axiosClient";

const accessoryApi = {
    getAllAccessory: async () => {
        const url = 'accessories';
        return await axiosClient.get(url)
    }
}

export default accessoryApi;