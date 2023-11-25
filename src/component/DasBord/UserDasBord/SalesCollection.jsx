import { useContext, useEffect, useState } from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";
import { MyContext } from "../../../Route/AuthProvider";
import PublicApi from "../../../Hook/PublicApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SalesCollection = () => {
  const axiosSecure = AdminSecoure();
  const axoisPublic = PublicApi()
  const { user } = useContext(MyContext);
  const [salesDataStart, setSalesData] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/shopProduct?email=${user?.email}`).then((res) => {
      setSalesData(res.data);
    });
  }, [user?.email, axiosSecure]);
  const handeChack = (sId,shopName,display_url,Discount,quantity,sellingPrice,email) => {
    const salesData = {sId,shopName,display_url,Discount,quantity,sellingPrice,email}
    axoisPublic.post('/salesProduct',salesData)
    .then(res=>{
       if(res.data.insertedId){
        toast.success("Add for check-out successfuly")
       }
    })
    
  };
  console.log(salesDataStart);
  const handelSearch = (e)=>{
    e.preventDefault()
    const id = e.target.serch.value
    console.log(id);
    const filter = salesDataStart?.filter(serch=>serch._id == id)
    console.log(filter);
    setSalesData(filter)
 

  }
  return (
    <div>
      <div>
        <div className="join flex justify-center ">
          <form onSubmit={handelSearch}>
            <input
            name="serch"
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
              {salesDataStart?.map((item, index) => {
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
                      <button
                        onClick={() =>
                          handeChack(
                            item?._id,
                            item?.shopName,
                            item?.display_url,
                            item?.Discount,
                            item.quantity,
                            item?.sellingPrice,
                            user?.email
                          )
                        }
                        className="btn bg-green-300 text-xl "
                      >
                        Add For Check-out
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
         
        </div>
        <Link className="flex justify-center" to={'/dasbord/chackOut'}>
              <button className="btn bg-red-500 text-xl text-white mt-[100px]">Proceed Checkout</button>
          </Link>
        
      </div>
    </div>
  );
};

export default SalesCollection;
