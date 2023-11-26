import { useContext } from "react";
import { MyContext } from "../Route/AuthProvider";
import PublicApi from "./PublicApi";
import { useQuery } from "@tanstack/react-query";


const Adminapi = () => {
    const {user}=useContext(MyContext)
    const publicAxios = PublicApi()
    const {data,refetch}=useQuery({
        queryKey:["adminandmanager",publicAxios,user?.email],
        queryFn :async()=>{
            const {data}= await publicAxios.get(`/user?email=${user?.email}`)
            return data
        }
    })
    return {data}
};

export default Adminapi;