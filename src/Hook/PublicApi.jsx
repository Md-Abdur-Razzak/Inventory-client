import axios from "axios";

const axoisPublic =axios.create({
    baseURL:"https://inventory-server-azure.vercel.app"
})

const PublicApi = () => {
    return axoisPublic
};

export default PublicApi;