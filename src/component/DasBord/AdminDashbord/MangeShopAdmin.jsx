import { useEffect, useState } from "react";
import AllUser from "../../../Hook/AllUser";
import AdminSecoure from "../../../Hook/AdminSecoure";


const MangeShopAdmin = () => {
    const axiosSecure = AdminSecoure()
    const [alluser,setUser]=useState([])
   
    useEffect(()=>{
        axiosSecure.get('/alluser')
        .then(res=>{
            const filter =res?.data?.filter(user=>user.roll=="manager")
           setUser(filter)
        })
    },[axiosSecure])

    return (
        <div>
           <div>
        <div className="overflow-x-auto rounded-md mt-9">
          <table className="table">
            {/* head */}
            <thead className="bg-red-200  ">
              <tr>
                <th>
                  <label>#</label>
                </th>

                <th>Shop Logo</th>
                <th>Shop Name</th>
                <th>Product Linit</th>
                <th>Shop Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {alluser?.map((item, index) => {
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
                    <td>{item?.name}</td>
                    <td>{item.limit}</td>
                    <td>{item?.shopInfo}</td>
             
                    <th>
                      <button className="btn bg-red-400 text-white">
                       send Notice
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
         
        </div>
      
        
      </div>
        </div>
    );
};

export default MangeShopAdmin;