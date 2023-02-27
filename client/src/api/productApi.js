import axiosClient from "./axiosClient";

const productApi = {
    getProductById: async (id) => {
        const url = `products/${id}`;
        return await axiosClient.get(url, id)
    }
}

export default productApi;