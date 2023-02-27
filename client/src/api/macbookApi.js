import axiosClient from "./axiosClient";

const macbookApi = {
    getAllMacbook: async () => {
        const url = 'macs';
        return await axiosClient.get(url)
    }
}

export default macbookApi;