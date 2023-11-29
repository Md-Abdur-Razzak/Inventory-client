import React, { useContext } from 'react';
import { MyContext } from '../../../Route/AuthProvider';
import google from "../../../assets/g-removebg-preview.png"
import PublicApi from '../../../Hook/PublicApi';
import Users from '../../../Hook/Users';
import { useNavigate } from 'react-router-dom';

const Google = () => {
    const {googleAthntocation}=useContext(MyContext)
    const publicAxiosApi = PublicApi()
    const navigator = useNavigate()
    const {refetch}=Users()
    const HandelGogole = ()=>{
        googleAthntocation()
        .then((res)=>{
          publicAxiosApi.get(`/user?email=${res.user.email}`)
          .then(res=>{
            console.log(res.data);
              if(res?.data?.roll=="manager"){
                 refetch()
                navigator('/dasbord/projectManaget')
              }
              else if (res?.data?.roll=="admin") {
               refetch()
                navigator('/dasbord/manageshop')
              }
              else if(res?.data?.creatshop){
                  navigator('/Create-Store')
              }
          })
          
            const display_url = res?.user?.photoURL
            const name = res?.user?.displayName
            const email = res?.user?.email
            const userInfo = { name, display_url, email };
            console.log(userInfo);
            publicAxiosApi.post("/user", userInfo)
            .then(res=>{
            console.log(res.data);
            })
        
        

            publicAxiosApi.get(`/user?email=${res.user.email}`)
            .then(res=>{
              console.log(res.data);
                if(res?.data?.roll=="manager"){
                   refetch()
                  navigator('/dasbord/projectManaget')
                }
                else if (res?.data?.roll=="admin") {
                 refetch()
                  navigator('/dasbord/manageshop')
                }
                else if(res?.data?.creatshop){
                    navigator('/Create-Store')
                }
            })
        })
    }
    return (
        <div className=''>
        <div className='flex justify-center gap-2 items-center'>
            <h1 className='h-1 w-[100%] bg-blue-400'></h1>
           <h1>OR</h1>
           <h1 className='h-1 w-[100%] bg-blue-400'></h1>
           
        </div>
      <div className='flex gap-2 justify-center mb-3 mt-2'>
      <div className='w-[50px]   border-blue-400' onClick={HandelGogole}>
            <img className='rounded-full border' src={google} alt="" />
        </div>
      

      </div>
    </div>
    );
};

export default Google;