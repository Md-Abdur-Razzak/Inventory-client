import React, { useEffect, useState } from 'react';
import AdminSecoure from '../../../Hook/AdminSecoure';
import AllUser from '../../../Hook/AllUser';

const SaleSummryAdmin = () => {
    const axiosSeure = AdminSecoure()
    const [amount,setAmount]=useState()
    const [allProduct,setAllProduct]=useState([])
    const [sales,setSale]=useState([])
    const {data:allusers} = AllUser()
 
    useEffect(()=>{
            axiosSeure.get('/amount')
            .then(res=>{
                const price = res?.data?.reduce((sum,totall)=>sum+totall.taka,0)
               setAmount(price);
            })
            axiosSeure.get('/allShopProduct')
            .then(res=>{
              setAllProduct(res.data.length);
            })
            axiosSeure.get('/allpaidInfo')
            .then(res=>{
                setSale(res.data.length);
            })
    },[axiosSeure])

    return (
        <div>
           <div>
           <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>

            <div className="stat-value">{amount}</div>
            <div className="stat-desc text-xl">Total Taka </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>

            <div className="stat-value">{allProduct}</div>
            <div className="stat-desc text-xl">Total Product</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>

            <div className="stat-value">{sales}</div>
            <div className="stat-desc text-xl">Total sales Product</div>
          </div>
        </div>
           </div>
           {/* table show all users  */}
           <div className="overflow-x-auto rounded-md mt-9">
          <table className="table">
            {/* head */}
            <thead className="bg-red-200  ">
              <tr>
                <th>
                  <label>#</label>
                </th>

               
                <th>User Name</th>
                <th>Email</th>
                <th>Shop Name</th>
                <th>User Roll</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allusers?.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                  
                    <td>{item?.name}</td>
                    <td>{item.email}</td>
                    <td>{item.shopName || "Name Empty"}</td>
                    <td>{item?.roll =="admin" ? "manager" : item?.roll =="manager"? "Manager": "Empty" }</td>
             
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
    );
};

export default SaleSummryAdmin;