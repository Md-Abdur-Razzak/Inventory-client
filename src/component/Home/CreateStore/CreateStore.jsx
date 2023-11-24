import { useContext } from "react";
import { MyContext } from "../../../Route/AuthProvider";
import { userimage } from "../../../utis/imageUplode";
import PublicApi from "../../../Hook/PublicApi";
import Users from "../../../Hook/Users";
import { toast } from "react-toastify";

const CreateStore = () => {
    const {user}=useContext(MyContext)
    const publicAxois =PublicApi() 
    const {refetch} = Users()


    
    const handelAddData = async(e) =>{
        e.preventDefault()
        const from = e.target
        const shopName = from.shopName.value
        const sWonerName = from.sWonerName.value
        const shopInfo = from.shopInfo.value
        const shopArea = from.shopArea.value
        const shopEmail =from.shopEmail.value
        const logo = from.image.files[0]
        const limit = 3
        const manager = "manager"
        const {display_url} = await userimage(logo)
      
        const prodectsAllDetails = {shopName,sWonerName,shopInfo,shopArea,shopEmail,display_url,limit,manager}
    //   console.log(prodectsAllDetails);
        const{data}=await publicAxois.post('/shop',prodectsAllDetails)
       if(data.message){
       return  toast.error("alredy shop create")
       }
     else {
       await refetch()
        toast.success("Congratulations !")
     }

    }


  return (
    <div>
      <div className="form-control">
        <div className="hero min-h-screen bg-base-200 dark:bg-black">
          <div className="hero-content w-[50%] max-[769px]:w-[90%] flex-col ">
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
                      <span className="label-text">shop woner Name</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      disabled
                      name='sWonerName'
                      className="input input-bordered w-full"
                      required
                    />
                  </div> 
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                     defaultValue={user?.email}
                     disabled
                      name="shopEmail"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                <div className="form-control mt-3  ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Shop Logo</span>
                    </label>
                    <input
                      type="file"
                      
                      name="image"

                      required
                    />
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

export default CreateStore;