import axios from "axios";

const axiosSecure = axios.create({
    baseURL:"http://localhost:5000"
})

const AdminSecoure = () => {
    return axiosSecure
};

export default AdminSecoure;