import axiosClient from "./axiosClient";

const category = {
    All: async () => {
        const url = 'category/getall';
        return await axiosClient.get(url)
    },

}

export default category;