import axios from "axios";

const axoisPublic =axios.create({
    baseURL:"http://localhost:5000"
})

const PublicApi = () => {
    return axoisPublic
};

export default PublicApi;