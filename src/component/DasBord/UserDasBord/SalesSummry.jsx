import { useContext, useEffect, useState } from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";
import { MyContext } from "../../../Route/AuthProvider";
import Loding from "../../Home/loder/Loding";
import { Helmet } from "react-helmet-async";
import sales from "../../../assets/saleng2.png";
import invest from "../../../assets/invest.png";
import profitImg from "../../../assets/profit.png";
import totalProduct from "../../../assets/product-removebg-preview.png";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";

// -------------------React Rechart------------------------------

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

// -------------------React Rechart End---------------------------

const SalesSummry = () => {
  const axiosSecure = AdminSecoure();
  const { user } = useContext(MyContext);
  const [page, setPage] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ["sellSummaryll", page, user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/paindInfo?email=${user?.email}&page=${page}`
      );

      return res?.data;
    },
  });
  if (isLoading) {
    return <Loding></Loding>;
  }

  const totalPage = Math.ceil(data?.lengthData / 5);

  const pages = [...new Array(totalPage).fill(0)];
 
  const chart = [
    {
      name: "Total Seling",
      uv: data?.saleingPrice.toFixed(3),
    },
    {
      name: "Totall Invest",
      uv: data?.productCost.toFixed(3),
    },
    {
      name: "Total Profit",
      uv: data?.totalSale,
    },
    {
      name: "Total Product",
      uv: parseInt(data?.lengthData),
    },
  ];

  return (
    <div>
      {data?.users?.length == 0 ? (
        <div className="flex justify-center mt-[30vh] font-extrabold text-3xl text-pink-400">Product is Empty</div>
        
      ) : (
        <div>
          <Helmet>
            <title>StoreShop || Sales Summary</title>
          </Helmet>
          <div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-10 p-7 shadow">
              <div className="">
                <div className="">
                  <div className="flex flex-col justify-center items-center">
                    <img className="w-9" src={totalProduct} alt="" />
                    <div className="stat-desc text-xl">Total Product Sale</div>

                    <div className="stat-value">{data?.lengthData}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-9" src={sales} alt="" />
                <div className="stat-desc text-xl">Total selling </div>

                <div className="text-4xl font-extrabold">
                  {data?.saleingPrice.toFixed(3)} TK
                </div>
              </div>

              <div className="">
                <div className="flex flex-col justify-center items-center">
                  <img className="w-9" src={invest} alt="" />
                  <div className="stat-desc text-xl">Total Invest </div>

                  <div className="stat-value">
                    {data?.productCost.toFixed(3)} TK
                  </div>
                </div>
              </div>

              <div className="">
                <div className="">
                  <div className="flex flex-col justify-center items-center">
                    <img className="w-9" src={profitImg} alt="" />
                    <div className="stat-desc text-xl">Total Profit</div>

                    <div className="stat-value">
                      {data?.totalSale.toFixed(3)} TK
                    </div>
                  </div>
                </div>
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
                    <th>Profit</th>
                    <th>Date</th>

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {data?.users?.map((item, index) => {
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
                                  src={item?.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </td>
                        <td>{item?.shopname}</td>

                        <td>
                          {((item?.sellingPrice) - (item?.ProductionCost)).toFixed(3)}
                        </td>
                        <td>{item?.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
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
                  index === page ? "bg-[#7cb518]" : "bg-white"
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
        </div>
      )}
    </div>
  );
};

export default SalesSummry;
