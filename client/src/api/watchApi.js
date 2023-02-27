import axiosClient from "./axiosClient";

const watchApi = {
    getAllWatch: async () => {
        const url = 'watches';
        return await axiosClient.get(url);
    }
}
export default watchApi;



