import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://inventory-server-azure.vercel.app",
});

const AdminSecoure = () => {
  return axiosSecure;
};

export default AdminSecoure;
