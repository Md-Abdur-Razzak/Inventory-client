import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
    const data=useLoaderData()
    const  {
        shopName,
        quantity,
        shopInfo,
        shopArea,
        ProductionCost,
        display_url,
   
        ProfitMargin,
        Discount,
       
        BuyingPrice
    
        
     
      }=data || {}
    return (
        <div>
        <div className="form-control">
          <div className="hero min-h-screen dark:bg-black">
            <div className="hero-content w-[80%] max-[769px]:w-[90%] flex-col ">
              <div className="text-center ">
                <h1 className="text-5xl font-bold">Products add </h1>
              </div>
              <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                <form onSubmit={'handelAddData'} className="card-body">
                  <div className="md:flex justify-between md:gap-4">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text">Shop Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Product Name"
                        name="shopName"
                        defaultValue={shopName}
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
                        defaultValue={shopInfo}
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
                        defaultValue={shopArea}
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
                      defaultValue={quantity}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">ProductionCost</span>
                    </label>
                    <input
                      type="text"
                      name="ProductionCost"
                      defaultValue={ProductionCost}
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
                      placeholder="100%"
                      name="ProfitMargin"
                      defaultValue={ProfitMargin}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Buying Price</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Buying Price"
                      name="BuyingPrice"
                      defaultValue={ BuyingPrice}
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
                      defaultValue={Discount}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control mt-3  ">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Shop image</span>
                      </label>
                      <input type="file" name="image" defaultValue={  display_url} required />
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

export default UpdateProduct;