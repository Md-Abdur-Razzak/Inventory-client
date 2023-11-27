import React, { useEffect, useState } from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";
import AllUser from "../../../Hook/AllUser";
import PublicApi from "../../../Hook/PublicApi";
import Loding from "../../Home/loder/Loding";

const SaleSummryAdmin = () => {
  const axiosSeure = AdminSecoure();
  const axiosPublic = PublicApi();
  const [amount, setAmount] = useState();
  const [allProduct, setAllProduct] = useState([]);
  const [sales, setSale] = useState([]);
  const [user, SetUser] = useState([]);

  // -----------------pagenation start---------------------
  const [totallDataCount, setTotallDataCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectvalue, currentShowPage] = useState(2);

  const sumPages = Math.ceil(totallDataCount / selectvalue);
  console.log({sumPages});
  const pages = [...Array(sumPages).keys()];
const [loding,setLoding]=useState(true)

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
    // axiosSeure.get("/alluser").then((res) => {
    //   SetUser(res.data);
    //   setLoding(false)
    // });
    axiosPublic.get(`/count`).then((res) =>{
       setTotallDataCount(res.data.count)
       setLoding(false)
      });
      // page=${currentvalue}&size=${selectvalue}`
  
  }, [axiosSeure,axiosPublic]);
  useEffect(()=>{
    axiosPublic.get(`/pagination?page=${currentPage}&size=${selectvalue}`)
    .then((res) => {
     SetUser(res.data)
     setLoding(false)
    })
  },[axiosPublic,selectvalue,currentPage])

  // -----------------pagenation end----------------------

if (loding) {
  return <Loding></Loding>
}

  // useEffect(() => {
  //   axiosPublic.get(`/pagination?page=${currentPage}&size=${selectvalue}`)
  //   .then((res) => console.log(res.data))
  // }, [axiosPublic,selectvalue,currentPage]);

  // ----------------------------pagination-------------------------------
  const handelClick = (page) => {
    setCurrentPage(page);
    console.log(page);
  };
  const handelChange = (e) => {
    e.preventDefault()
    const data =parseInt( e.target.value)
    console.log(data);
    currentShowPage(data);
    setCurrentPage(1)
  };

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
            {user?.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>

                  <td>{item?.name}</td>
                  <td>{item.email}</td>
                  <td>{item.shopName || "Name Empty"}</td>
                  <td>
                    {item?.roll == "admin"
                      ? "manager"
                      : item.roll == "manager"
                      ? "manager"
                      : "Empty"}
                  </td>

                  <th>
                    {item?.roll ? (
                      ""
                    ) : (
                      <button className="btn bg-red-400 text-white">
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
     <div className="flex items-center justify-center">
     <div className="text-center ">
        {pages?.length == 0
          ? ""
          : pages?.map((page) => (
              <button
                className={`${
                  currentPage == page+1  && "bg-red-700"
                } btn bg-green-700 text-white`}
                key={page + 1}
                onClick={() => handelClick(page+1)}
              >
                {page+1 }
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
            defaultChecked={selectvalue}
          >
            <option value="2">2</option>
            <option value="3" >
             3
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        )}
      </div>
     </div>
    </div>
  );
};

export default SaleSummryAdmin;
