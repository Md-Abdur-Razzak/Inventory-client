import { useContext, useEffect, useState } from "react";
import PublicApi from "./PublicApi";
import { useQuery } from "@tanstack/react-query";
import { MyContext } from "../Route/AuthProvider";


const Users = () => {
    const {user}=useContext(MyContext)
    const publicAxios = PublicApi()
    const {data,refetch}=useQuery({
        queryKey:["usersdata",publicAxios,user?.email],
        queryFn :async()=>{
            const {data}= await publicAxios.get(`/users?email=${user?.email}`)
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