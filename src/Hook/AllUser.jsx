import React from 'react';
import AdminSecoure from './AdminSecoure';
import { useQuery } from '@tanstack/react-query';

const AllUser = () => {
    const axiosSecure = AdminSecoure()
    const {data,refetch}=useQuery({
        queryKey:["alluser"],
        queryFn :async()=>{
            const {data}= await axiosSecure.get(`/alluser`)
            return data
        }
    })
   return {data}
};

export default AllUser;