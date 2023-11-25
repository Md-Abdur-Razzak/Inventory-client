import React, { useContext, useEffect, useState } from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";
import { MyContext } from "../../../Route/AuthProvider";
import { userimage } from "../../../utis/imageUplode";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const AddProduct = () => {
  const adminSecure = AdminSecoure();
  const { user } = useContext(MyContext);
//   const [shopUser, setShopUser] = useState({});

//   useEffect(() => {
//     adminSecure.get(`/user?email=${user?.email}`).then((res) => {
//       setShopUser(res?.data?.users);
//     });
//   }, [user?.email, adminSecure]);
//   const { _id, name, email ,limit} = shopUser || {};
  const {data,isLoading,refetch}=useQuery({
    queryKey:["lomit",user?.email,adminSecure],
    queryFn:async()=>{
            const {data}=await adminSecure.get(`/user?email=${user?.email}`)
            return data
    }
  })
  if (isLoading) {
    return <h1>loding-----------</h1>
  }

 const { _id, name, email ,limit} = data.users || {};
 
console.log(limit);
  const handelAddData = async (e) => {

    e.preventDefault();
    if (limit<=0) {
        return toast.warn("your product Limit end ")
    }
    const from = e.target;
    const shopName = from.shopName.value;
    const quantity = from.Quantity.value;
    const shopInfo = from.shopInfo.value;
    const shopArea = from.shopArea.value;
    const ProductionCost = parseInt(from.ProductionCost.value);
    const ProfitMargin = parseInt(from.ProfitMargin.value);
    const Discount = from.Discount.value;
     const logo = from.image.files[0];
    
  

   
    let tax = ProductionCost * (7.5 / 100);
    let profit = ProductionCost * (ProfitMargin / 100);
    let sellingPrice =(ProductionCost + tax + profit);


    const { display_url } = await userimage(logo);
    console.log(limit)
   

    const prodectsAllDetails = {
      shopName,
      quantity,
      shopInfo,
      shopArea,
      ProductionCost,
      display_url,
      limit,
      ProfitMargin,
      Discount,
      name,
      email,
      shopId: _id,
   
      sellingPrice,
      SaleCount:0
    };
    console.log(prodectsAllDetails);
        
        const{data}=await adminSecure.post('/shopProduct',prodectsAllDetails)
       if (data.insertedId) {
        await refetch()
       toast.success("Product Add Successfuly")
       }

  };

  return (
    <div>
      <div className="form-control">
        <div className="hero min-h-screen dark:bg-black">
          <div className="hero-content w-[80%] max-[769px]:w-[90%] flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Products add </h1>
            </div>
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
              <form onSubmit={handelAddData} className="card-body">
                <div className="md:flex justify-between md:gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Shop Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      name="shopName"
                      className="input input-bordered  "
                      required
                    />
                  </div>
                </div>
                <div className="md:flex justify-between md:gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">shop Details</span>
                    </label>
                    <input
                      type="text"
                      placeholder="shop Details"
                      name="shopInfo"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>
                <div className="md:flex justify-between md:gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Shop Location </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Shop Location"
                      name="shopArea"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product Quantity</span>
                  </label>
                  <input
                    type="text"
                    name="Quantity"
                    placeholder="Quantity"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Product Cost</span>
                  </label>
                  <input
                    type="text"
                    name="ProductionCost"
                    placeholder="Product Cost"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text"> Profit Margin</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Profit Margin"
                    name="ProfitMargin"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Discount</span>
                  </label>
                  <input
                    type="text"
                    name="Discount"
                    placeholder="Discount"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control mt-3  ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Shop Logo</span>
                    </label>
                    <input type="file" name="image" required />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-red-500">Create Shop</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
