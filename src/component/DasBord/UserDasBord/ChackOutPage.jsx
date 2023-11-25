import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../Route/AuthProvider';
import AdminSecoure from '../../../Hook/AdminSecoure';

const ChackOutPage = () => {
    // salesProduct
    const{user}=useContext(MyContext)
    const[chackOut,setChakOut]=useState([])
    const axiosSecure = AdminSecoure()
    useEffect(() => {
        axiosSecure.get(`/salesProduct?email=${user?.email}`).then((res) => {
            setChakOut(res.data);
        });
      }, [user?.email, axiosSecure]);
    return (
        <div>
         data: {chackOut.length}

         <div>
        <div className="overflow-x-auto rounded-md mt-9">
          <table className="table">
            {/* head */}
            <thead className="bg-red-200  ">
              <tr>
                <th>
                  <label>#</label>
                </th>

                <th>Image</th>
                <th>Product Name</th>
                <th>Product Id</th>
                <th>quantity</th>
                <th>selling Price</th>
                <th>Discount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {chackOut?.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item?.display_url}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </td>
                    <td>{item?.shopName}</td>
                    <td>{item._id}</td>
                    <td>{item?.quantity}</td>
                    <td>{item?.sellingPrice}</td>
                    <td>{item?.Discount}</td>
                   
                  </tr>
                );
              })}
            </tbody>
          </table>
         
        </div>
       <div className='flex justify-center mt-10'>
       <button className='text-xl btn bg-red-500'>Get Paid</button>
       </div>
        
      </div>
        </div>
    );
};

export default ChackOutPage;