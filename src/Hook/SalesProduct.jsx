import { useContext, useEffect, useState } from "react";
import AdminSecoure from "./AdminSecoure";
import { MyContext } from "../Route/AuthProvider";


const SalesProduct = () => {
    const axiosSecure = AdminSecoure()
    const {user}=useContext(MyContext)
    const [salesData,setSalesData]=useState([])
    useEffect(() => {
        axiosSecure.get(`/salesProduct?email=${user?.email}`).then((res) => {
            setSalesData(res.data);
        });
      }, [user?.email, axiosSecure]);
      return {salesData}
};

export default SalesProduct;