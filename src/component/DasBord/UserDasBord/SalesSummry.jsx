import { useContext, useEffect, useState } from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";
import { MyContext } from "../../../Route/AuthProvider";
import Loding from "../../Home/loder/Loding";
import { Helmet } from "react-helmet-async";
import sales from "../../../assets/saleng2.png";
import invest from "../../../assets/invest.png";
import profitImg from "../../../assets/profit.png";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useQuery } from "@tanstack/react-query";
const SalesSummry = () => {
  const axiosSecure = AdminSecoure();
  const { user } = useContext(MyContext);
  const [page, setPage] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ["sellSummaryll", page, user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/paindInfo?email=${user?.email}&page=${page}`
      )
      console.log(res);
      return res?.data;
    },
  });
  if (isLoading) {
    return <Loding></Loding>
  }

  const totalPage = Math.ceil(data?.lengthData / 5);


  const pages = [...new Array(totalPage).fill(0)];
  console.log({totalPage,pages});


  // useEffect(() => {
  //   axiosSecure.get(`/SortpaindInfo?email=${user?.email}`).then((res) => {
  //     setSalesData(res.data);
  //     setLoding(false)

  //   });
  // }, [user?.email, axiosSecure]);

  // const saleingPrice = card?.reduce(
  //   (sum, totalPrice) => sum + parseFloat(totalPrice.sellingPrice),
  //   0
  // );
  // const productCost = card?.reduce(
  //   (sum2, totalPrice2) => sum2 + parseFloat(totalPrice2.ProductionCost),
  //   0
  // );
  // const productProfit = saleingPrice - productCost;

  // -------------------paginatin end ----------------

  // useEffect(() => {
  //     if (salesData.length >=2) {
  //       axiosSecure
  //       .get(
  //         `/paindInfo?email=${user?.email}&page=${currentPage}&size=${selectvalue}`
  //       )
  //       .then((res) => {
  //         setTotallDataCount(parseInt(res?.data?.lengthData));
    
  //         setA(res?.data?.users);
  //         setTotallseling(res.data.saleingPrice);
  //         setProfit(res.data.totalSale);
  //         setInvest(res.data.productCost);
  //         setLoding(false);
  //       });
  //     }
  // }, [axiosSecure, selectvalue, currentPage, user?.email,salesData]);
  // console.log(salesData);

  // if (loding) {
  //   return <Loding></Loding>;
  // }
  // console.log(totallDataCount);
  // // ----------paginatin Api--------------------------

  // const handelClick = (page) => {
  //   setCurrentPage(page);
  // };
  // const handelChange = (e) => {
  //   e.preventDefault();
  //   const data = parseInt(e.target.value);
  //   currentShowPage(data);
  //   setCurrentPage(1);
  // };
  // const handelPrePage = () => {
  //   if (currentPage > 0) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  // const handelPreNext = () => {
  //   setCurrentPage(currentPage + 1);
  // };
  return (
  
    <div>
      {data?.users?.length == 0 ? (
        "Product is Empty"
      ) : (
        <div>
          <Helmet>
            <title>StoreShop ||Sales Summary</title>
          </Helmet>
          <div>
            <div className="grid grid-cols-3 p-7 shadow">
              <div className="flex flex-col justify-center items-center">
                <img className="w-9" src={sales} alt="" />
                <div className="stat-desc text-xl">Total sale </div>

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

                    <div className="stat-value">{data?.totalSale.toFixed(3)} TK</div>
                  </div>
                </div>
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
                          {(data?.saleingPrice - data?.productCost).toFixed(
                            3
                          )}
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
