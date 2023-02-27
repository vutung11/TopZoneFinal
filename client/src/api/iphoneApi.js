import axiosClient from "./axiosClient";

const iphoneApi = {
    getAllIphone: async () => {
        const url = 'iphones';
        return await axiosClient.get(url)
    },
    getIphoneById: async (id) => {
        const url = `iphones/${id}`;
        return await axiosClient.get(url, id)
    }
}

export default iphoneApi;