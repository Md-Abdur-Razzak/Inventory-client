import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../../Route/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { userimage } from "../../../utis/imageUplode";
import PublicApi from "../../../Hook/PublicApi";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  const { creatEmilAndPassword } = useContext(MyContext);
  const{logOutUser}=useContext(MyContext)
   const navigate = useNavigate();
   const axPublic = PublicApi();

  const handelRegistration = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
   
    const name = e.target.name.value;
    const image = e.target.image.files[0];
 

    if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      return toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase letter and one special character  "
      );
    }

    creatEmilAndPassword(email, password)
      .then(async (res) => {
        const { display_url } = await userimage(image);
        console.log(display_url);

        updateProfile(res.user, {
          displayName: name,
          photoURL: display_url,
        });
        const userInfo = { name, display_url, email };
     
   
          
            axPublic.post("/user", userInfo)
            .then(res=>{console.log()})
        
            logOutUser()
            navigate("/login");
        
        return toast.success("congratulations!  Registration successful plase Login Now! ");
      })
      .catch(() => {
        return toast.error("email already exists ");
      });
  };
  return (
    <div>
      <Helmet>
        <title>StoreShop ||Registration</title>
      </Helmet>
      <div className="flex justify-center mt-14 ">
        <h1 className="text-5xl font-bold">Registration</h1>
      </div>

      <div className="hero  min-h-screen pb-3 py-2.5">
        <div className=" card border border-3 border-cyan-700 flex-shrink-0 md:w-full w-[80%]  max-[363px]:w-[90%]  max-w-[600px] py-9 md:px-16 px-5  shadow-2xl bg-base-100 mt-3">
          <form onSubmit={handelRegistration}>
            <div className="form-control  mt-1">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input w-full input-bordered "
              />
            </div>

            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                className="input w-full input-bordered"
              />
            </div>
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text mt-3">Image</span>
              </label>
              <input
                type="file"
                placeholder="PhotoURL"
                name="image"
                required
                className=" w-full "
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 text-white text-xl">
                Registration
              </button>
            </div>
            <div className="text-xl">
              <span>
                Already have an account?{" "}
                <Link to={"/login"} className="text-blue-600 underline">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
