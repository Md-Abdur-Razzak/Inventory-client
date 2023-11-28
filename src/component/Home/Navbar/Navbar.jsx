import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../../../Route/AuthProvider";
import Users from "../../../Hook/Users";
import logo from '../../../assets/logo-removebg-preview.png'
const Navbar = () => {
  const { user ,logOutUser } = useContext(MyContext);
  const {data}=Users()

  return (
    <div className="navbar  bg-base-100 dark:text-white dark:bg-[#191945c1] sticky inset-0 z-10  rounded-none border  bg-opacity-30  text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 md:py-4 max-[769px]:py-9">
      <div className="navbar-start ">
        <div className="dropdown md:px-12">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-xl dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isActive
                  ? " text-white bg-red-500 btn"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/Create-Store"}
              className={({ isActive, isPending }) =>
                isActive
                  ? " text-white bg-red-500 btn"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Create-Store
            </NavLink>
            <NavLink
              to={"/Watch-Demo"}
              className={({ isActive, isPending }) =>
                isActive
                  ? " text-white bg-red-500 btn"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Watch Demo
            </NavLink>

            <NavLink
              to={"/registration"}
              className={({ isActive, isPending }) =>
                isActive
                  ? " text-white bg-red-500 btn"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Registration
            </NavLink>
            {
         data?.manager?
             <NavLink
            to={"/dasbord/projectManaget"}
            className={({ isActive, isPending }) =>
              isActive
                ? " text-white bg-red-500 btn"
                : isPending
                ? "pending"
                : ""
            }
          >
           {user?"Dashboard":""}
          </NavLink> :'' 
          
          } 
          {
         data?.admin?
             <NavLink
            to={"/dasbord/manageshop"}
            className={({ isActive, isPending }) =>
              isActive
                ? " text-white bg-red-500 btn"
                : isPending
                ? "pending"
                : ""
            }
          >
           {user?"Dashboard":""}
          </NavLink> :'' 
          
          } 
            
          </ul>
        </div>
        <div className='md:flex flex-col justify-center items-center max-[320px]:hidden'>
          <img
            src={
             logo
            }
            className="xl:w-[100px] w-[80px]" 
          />
          <h1 className='xl:text-2xl font-extrabold max-[426px]:text-sm'>
         
          STORE<span className="text-red-400">SHOP</span>
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  text-xl font-bold flex items-center gap-5 px-1">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isActive
                ? " text-white bg-red-500 btn"
                : isPending
                ? "pending"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/Create-Store"}
            className={({ isActive, isPending }) =>
              isActive
                ? " text-white bg-red-500 btn"
                : isPending
                ? "pending"
                : ""
            }
          >
            Create-Store
          </NavLink>
          <NavLink
            to={"/Watch-Demo"}
            className={({ isActive, isPending }) =>
              isActive
                ? " text-white bg-red-500 btn"
                : isPending
                ? "pending"
                : ""
            }
          >
            Watch Demo
          </NavLink>

          <NavLink
            to={"/registration"}
            className={({ isActive, isPending }) =>
              isActive
                ? " text-white bg-red-500 btn"
                : isPending
                ? "pending"
                : ""
            }
          >
            Registration
          </NavLink>
          {
         data?.manager?
             <NavLink
            to={"/dasbord/projectManaget"}
            className={({ isActive, isPending }) =>
              isActive
                ? " text-white bg-red-500 btn"
                : isPending
                ? "pending"
                : ""
            }
          >
           {user?"Dashboard":""}
          </NavLink> :'' 
          
          } 
          {
         data?.admin?
             <NavLink
            to={"/dasbord/manageshop"}
            className={({ isActive, isPending }) =>
              isActive
                ? " text-white bg-red-500 btn"
                : isPending
                ? "pending"
                : ""
            }
          >
           {user?"Dashboard":""}
          </NavLink> :'' 
          
          } 
        </ul>
      </div>
      <div className="navbar-end  md:pr-12">
        <div className="flex flex-col items-center">
        <label tabIndex={0} className="btn  btn-circle avatar">
          <div className="xl:w-12 rounded-full">
            {
                user?.photoURL?<img
                className="w-14 border border-blue-400  rounded-full"
                src={user?.photoURL}
                alt=""
              />
              : <img
              className="w-14 border border-blue-400  rounded-full"
              src={"https://i.ibb.co/VDMnSyz/iconlog.jpg"}
              alt=""
            />
            }
         
          </div>
       
            
         
        </label>
        <div className="">
            {
            user?.displayName? <h3>{user?.displayName}</h3>:""
            }
        </div>
        </div>
        {user ? (
          <button onClick={()=>logOutUser()} className="btn bg-red-500  text-white text-xl">logOut</button>
        ) : (
          <Link to={"/login"}>
            <button className="btn  bg-red-500 text-white text-xl">login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
