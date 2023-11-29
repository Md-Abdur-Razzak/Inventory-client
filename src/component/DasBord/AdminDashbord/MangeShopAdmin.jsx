import { useEffect, useState } from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";
import Loding from "../../Home/loder/Loding";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const MangeShopAdmin = () => {
  const axiosSecure = AdminSecoure();
  const [alluser, setUser] = useState([]);
  const [email, setemail] = useState('');
  const [loding, setLoder] = useState(true);
  const form = useRef();

  useEffect(() => {
    axiosSecure.get("/alluser").then((res) => {
      const filter = res?.data?.filter((user) => user.roll == "manager");
      setUser(filter);
      setLoder(false);
    });
  }, [axiosSecure]);
  if (loding) {
    return <Loding></Loding>;
  }


  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mhk95kh', 'template_nugeeod', form.current, '6e_NFxreZRsQsS1GH')
        .then((result) => {
           document.getElementById("my_modal_3").close()
            toast.success("email send successfuly")
        }, (error) => {
            console.log(error.text);
        });
      }  
  return (
    <div>
        <Helmet>
        <title>StoreShop || Manage Shop Admin</title>
      </Helmet>
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
                <th>Product Limit</th>
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
                              src={item?.logo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </td>
                    <td>{item?.storeName}</td>
                    <td>{item.limit}</td>
                    <td>{item?.shopInfo}</td>

                    <th>
                    
                      <button
                        onClick={()=>{
                          setemail(item?.email)
                          document.getElementById("my_modal_3").showModal()
                        }}
                        className="btn bg-red-400 text-white"
                      >
                        send Notice
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          {/* <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            open modal
          </button> */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div>
              <form ref={form} onSubmit={sendEmail}>
                        {/* <label>Name</label>
                        <input className="border-pink-300 rounded-md border w-full py-4" type="text" name="user_name" /> */}
                        <label>Email</label>
                        <input defaultValue={email} className="border-pink-300 px-4 rounded-md border w-full py-4" type="email" name="user_email" />
                        <label>Message</label>
                        <textarea className="border border-pink-300 px-4  rounded-md w-full py-4" name="message" />
                        <input className="border-pink-300 bg-red-400 text-white text-xl font-bold rounded-md border w-full py-4" type="submit" value="Send" />
                    </form>
              </div>
              
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default MangeShopAdmin;
