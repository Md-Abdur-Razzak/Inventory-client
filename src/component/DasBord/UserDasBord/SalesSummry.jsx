import { useContext, useEffect, useState } from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";
import { MyContext } from "../../../Route/AuthProvider";
import Loding from "../../Home/loder/Loding";

const SalesSummry = () => {
  const axiosSecure = AdminSecoure();
  const { user } = useContext(MyContext);
  const [salesData, setSalesData] = useState([]);
  const [card, setcard] = useState([]);
  // -------------------pagination---------------------
  const [totallDataCount, setTotallDataCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectvalue, currentShowPage] = useState(2);

  const sumPages = Math.ceil(totallDataCount / selectvalue);

  const pages = [...Array(sumPages).keys()];

  const [loding, setLoding] = useState(true);


  useEffect(() => {
    axiosSecure.get(`/SortpaindInfo?email=${user?.email}`).then((res) => {
      setTotallDataCount(parseInt(res?.data?.length))
      setcard(res.data)
      setSalesData(res.data);
      setLoding(false)
     
   
    });
  }, [user?.email, axiosSecure]);

  const saleingPrice = card?.reduce(
    (sum, totalPrice) => sum + parseFloat(totalPrice.sellingPrice),
    0
  );
  const productCost = card?.reduce(
    (sum2, totalPrice2) => sum2 + parseFloat(totalPrice2.ProductionCost),
    0
  );
  const productProfit = saleingPrice - productCost;
 




  // -------------------paginatin end ----------------

  useEffect(() => {
    axiosSecure.get(`/paindInfo?email=${user?.email}&page=${currentPage}&size=${selectvalue}`).then((res) => {
      setSalesData(res?.data);
      setLoding(false)
  });  
  }, [axiosSecure, selectvalue, currentPage,user?.email]);
  if (loding) {
    return <Loding></Loding>
  }

  // ----------paginatin Api--------------------------



  const handelClick = (page) => {
    setCurrentPage(page);

  };
  const handelChange = (e) => {
    e.preventDefault();
    const data = parseInt(e.target.value);
    currentShowPage(data);
    setCurrentPage(1);
  };

  return (
    <div>
      {salesData?.length == 0 ? (
        "Product is Empty"
      ) : (
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

                <div className="stat-value">{saleingPrice}</div>
                <div className="stat-desc text-xl">Total sale </div>
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

                <div className="stat-value">{productCost}</div>
                <div className="stat-desc text-xl">Total Invest</div>
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

                <div className="stat-value">{productProfit.toFixed(3)}</div>
                <div className="stat-desc text-xl">Total Profit</div>
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
                 
                  {salesData?.map((item, index) => {
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
                          {(item?.sellingPrice - item?.ProductionCost).toFixed(
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
          <div className="flex items-center justify-center">
            <div className="text-center ">
              {pages?.length == 0
                ? ""
                : pages?.map((page) => (
                    <button
                      className={`${
                        currentPage == page + 1 && "bg-red-700"
                      } btn bg-green-700 text-white`}
                      key={page + 1}
                      onClick={() => handelClick(page + 1)}
                    >
                      {(page+1)}
                    </button>
                  ))}
            </div>
            <div>
              {pages?.length == 0 ? (
                ""
              ) : (
                <select
                  className="btn bg-gray-800 text-white"
                  onChange={handelChange}
                 
                >
                  <option value="2" selected>2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesSummry;
