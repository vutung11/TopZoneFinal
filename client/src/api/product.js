import axiosClient from "./axiosClient";

const product = {
    All: async (idCategory) => {
        const url = 'product/category';
        return await axiosClient.post(url, { category: idCategory })
    },
    GetBySlug: async (slug) => {
        const url = `product/${slug}`;
        return await axiosClient.get(url, slug)
    }
}

export default product;