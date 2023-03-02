import axiosClient from "./axiosClient";

const product = {
    All: async (title) => {
        const url = 'product/category';
        return await axiosClient.post(url, { title: title })
    },
    GetBySlug: async (slug) => {
        const url = `product/${slug}`;
        return await axiosClient.get(url, slug)
    }
}

export default product;