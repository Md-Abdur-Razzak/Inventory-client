import React, { useEffect, useState } from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";

import PublicApi from "../../../Hook/PublicApi";
import Loding from "../../Home/loder/Loding";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import takaImage from '../../../assets/profit.png'
import totallProduct from '../../../assets/product-removebg-preview.png'
import salesProduct from '../../../assets/saleng2.png'
import { GrNext, GrPrevious } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const SaleSummryAdmin = () => {
  const axiosSeure = AdminSecoure();
  const axiosPublic = PublicApi();
  const [amount, setAmount] = useState();
  const [allProduct, setAllProduct] = useState([]);
  const [sales, setSale] = useState([]);

  const [email, setemail] = useState([]);
  const form = useRef();
  const [loding,setLoding]=useState(true)
  const [page, setPage] = useState(0);

  


  useEffect(() => {
    axiosSeure.get("/amount").then((res) => {
      const price = res?.data?.reduce((sum, totall) => sum + totall.taka, 0);
      setAmount(price);
      setLoding(false)
    });
    axiosSeure.get("/allShopProduct").then((res) => {
      setAllProduct(res.data.length);
      setLoding(false)
    });
    axiosSeure.get("/allpaidInfo").then((res) => {
      setSale(res.data.length);
      setLoding(false)
    });
  
 
   
  
  }, [axiosSeure,axiosPublic]);

  const { data, isLoading } = useQuery({
    queryKey: ["adminProgation", page],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/pagination?page=${page}`
      )
     
      return res?.data;
    },
  });

  if (isLoading) {
    return <Loding></Loding>
  }

  const totalPage = Math.ceil(data?.lengthData.length / 5);
  const pages = [...new Array(totalPage).fill(0)];
  



  const chart = [
    {
      name: "Total Daler",
      uv: (amount/100),
    },
    {
      name: "Totall Product",
      uv: parseInt(allProduct),
    },
    {
      name: "Total Sales Product",
      uv:sales,
    },
   
  ];



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
        <title>StoreShop || Sales Summary Admin</title>
      </Helmet>
      <div>
        <div className="shadow">
          <div className="">
          <div className="grid grid-cols-3 p-4">
                <div className="">
                  <div className="flex flex-col justify-center items-center">
                    <img className="w-9" src={takaImage} alt="" />
                    <div className="stat-desc text-xl">Total Daler </div>
                    <div className="text-3xl font-extrabold">$ {(amount/100)}</div>
                  </div>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <img className="w-9" src={totallProduct} alt="" />
                    <div className="stat-desc text-xl">Total Product</div>
                    <div  className="text-3xl font-extrabold">{allProduct}</div>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                    <img className="w-9" src={salesProduct} alt="" />
                    <div className="stat-desc text-xl">Total sales Product</div>
                    <div  className="text-3xl font-extrabold">{sales}</div>
                  </div>

                  <div className="">
                <BarChart
                  width={500}
                  height={300}
                  data={chart}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar
                    dataKey="uv"
                    fill="#8884d8"
                    shape={<TriangleBar />}
                    label={{ position: "top" }}
                  >
                    {chart.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                  </Bar>
                </BarChart>
              </div>

           
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
     
            {data?.count?.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>

                  <td>{item?.name}</td>
                  <td>{item.email}</td>
                  <td>{item.storeName || "Name Empty"}</td>
                  <td>
                    {item?.roll == "admin"
                      ? "Admin"
                      : item.roll == "manager"
                      ? "manager"
                      : "Empty"}
                  </td>

                  <th>
                    {item?.roll ? (
                      ""
                    ) : (
                      <button
                      onClick={()=>{
                        setemail(item?.email)
                        document.getElementById("my_modal_3").showModal()
                      }}
                       className="btn bg-red-400 text-white">
                        Send Promotional Email
                      </button>
                    )}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center gap-2">
        <button
          className={""}
          onClick={() => setPage(page > 0 ? page - 1 : 0)}
        >
           <GrPrevious></GrPrevious>
        </button>
        {pages.map((item, index) => (
          <button
            className={`w-7 h-7 flex justify-center items-center border border-[#7cb518] rounded-full ${
              index === page ? "bg-[red] text-white" : "bg-white"
            }`}
            key={index}
            onClick={() => setPage(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={""}
          onClick={() =>
            setPage(page < pages.length - 1 ? page + 1 : pages.length - 1)
          }
        >
        <GrNext></GrNext>
        </button>
      </div>

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
   
  );
};

export default SaleSummryAdmin;
