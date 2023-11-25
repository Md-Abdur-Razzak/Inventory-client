import { useContext, useEffect, useState } from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";
import { MyContext } from "../../../Route/AuthProvider";

const SalesCollection = () => {
  const axiosSecure = AdminSecoure();
  const { user } = useContext(MyContext);
  const [salesData, setSalesData] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/shopProduct?email=${user?.email}`).then((res) => {
      setSalesData(res.data);
    });
  }, [user?.email, axiosSecure]);
  return (
    <div>
      <div>
        <div className="join flex justify-center ">
          <form >
            <input
              className="input px-44 input-bordered join-item"
              placeholder="Id : 6560ef61732cfc2132c97c7d"
            />
            <button className="btn join-item rounded-r-full">search</button>
          </form>
        </div>
      </div>
      {/* ----------tabol data-------------------  */}
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
                    <th>
                      <button className="btn bg-green-300 text-xl ">
                        Add For Check-out
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

export default SalesCollection;
