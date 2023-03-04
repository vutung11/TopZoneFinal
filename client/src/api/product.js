import axiosClient from "./axiosClient";

const product = {
    All: async (slug, page, limit) => {
        const url = `product/category?page=${page ?? 1}&limit=${limit ?? 6}`;
        return await axiosClient.post(url, { slug, page, limit })
    },
    GetBySlug: async (slug) => {
        const url = `product/${slug}`;
        return await axiosClient.get(url, slug)
    }
}

export default product;