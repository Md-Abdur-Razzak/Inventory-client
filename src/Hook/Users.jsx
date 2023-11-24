import { useEffect, useState } from "react";
import PublicApi from "./PublicApi";
import { useQuery } from "@tanstack/react-query";


const Users = () => {
    const publicAxios = PublicApi()
    const {data,refetch}=useQuery({
        queryKey:["users"],
        queryFn :async()=>{
            const {data}= await publicAxios.get('/shop')
            return data
        }
    })
//     const [shopUser,setUser]=useState()
//    useEffect(()=>{
//     publicAxios.get('/shop')
//     .then(res=>setUser(res.data))
//    },[publicAxios])
//    return {shopUser}
return {data,refetch}
};

export default Users;