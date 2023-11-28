import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../Route/AuthProvider";
import AdminSecoure from "../../../Hook/AdminSecoure";
import moment from "moment";
import { jsPDF } from "jspdf";
import PublicApi from "../../../Hook/PublicApi";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const ChackOutPage = () => {
  // salesProduct
  const { user } = useContext(MyContext);
  const [chackOut, setChakOut] = useState([]);
  const axiosSecure = AdminSecoure();
  const axiosPublic = PublicApi();
  useEffect(() => {
    axiosSecure.get(`/salesProduct?email=${user?.email}`).then((res) => {
      setChakOut(res.data);
    });
  }, [user?.email, axiosSecure]);

  const handelPaid = async(id, image, shopname, sellingPrice, Discount,ProductionCost) => {
    const date = moment().format("L");
    const time = moment().format("h:mm:ss a");
    const email = user?.email
    const dateTimeId = { date, time, id };
    const paindInfo ={id,image,shopname,sellingPrice,Discount,ProductionCost,email,date}
    const doc = new jsPDF();
    doc.text(`${shopname}`,100,20,null,null, "center");
    doc.addImage(`${image}`, "JPEG", 15, 40, 180, 100);
    doc.text(`Product Name :${shopname}`, 20, 160);
    doc.text(`selling Price :${sellingPrice}`, 20, 170);
    doc.text(`Discount Price :${Discount}`, 20, 180);
    doc.save(`${shopname}.pdf`)
     const filterData = chackOut?.filter((itemData) => itemData.sId !== id);
    setChakOut(filterData);
    console.log(filterData);
    console.log(id);
    await axiosPublic.post("/getPaidUpdateData", dateTimeId)
   const {data:info} = await axiosPublic.post("/paindInfo", paindInfo)
   if(info.insertedId){
    toast.success("Get Paid success")
   }
  };
  return (
    <div>

    <Helmet>
        <title>StoreShop ||Chack-Out</title>
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
              {chackOut?.map((item, index) => {
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
                    <td>{item?.sId}</td>
                
                    <td>{item?.quantity}</td>
                    <td>{item?.sellingPrice}</td>
                    <td>{item?.Discount}</td>
                    <td>
                      <button
                        onClick={() =>
                          handelPaid(
                            item?.sId,
                            item?.display_url,
                            item?.shopName,
                            item?.sellingPrice,
                            item?.Discount,
                            item?.ProductionCost
                          )
                        }
                        className="text-xl btn bg-red-500"
                      >
                        Get Paid
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-10"></div>
      </div>
    </div>
  );
};

export default ChackOutPage;
