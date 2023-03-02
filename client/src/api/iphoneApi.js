import axiosClient from "./axiosClient";

const iphoneApi = {
    getAllIphone: async (idCategory) => {
        const url = 'product/getall';
        return await axiosClient.post(url, idCategory)
    },
    getIphoneById: async (id) => {
        const url = `iphones/${id}`;
        return await axiosClient.get(url, id)
    }
}

export default iphoneApi;