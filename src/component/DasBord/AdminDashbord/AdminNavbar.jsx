import { useContext } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../../../Route/AuthProvider";
import logo from '../../../assets/logo-removebg-preview.png'

const AdminNavbar = () => {
    const {user,logOutUser}=useContext(MyContext)
    const navigate = useNavigate()
  return (
    <div className="drawer z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <div className="flex justify-between items-center px-3">
         <label htmlFor="my-drawer" className="btn bg-red-300 text-2xl font-extrabold drawer-button">
           <AiOutlineBars/>
          </label>
          <div className="">
            <img className="w-[60px] ml-16 max-[420px]:hidden" src={logo} alt="" />
          </div>
          <div className=" flex flex-col justify-center items-center">
              
                {user&& <img className="w-[50px] rounded-full" src={user?.photoURL} alt=""  />}
                {user&& <h1>{user?.displayName}</h1>}
              
                
          </div>
         </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul> */}
        <ul className="flex flex-col  text-xl font-bold     gap-6  p-4 w-80 h-[100vh] bg-base-200">
          <li className="flex items-center gap-3">
           
            <NavLink
              to={"/dasbord/manageshop"}
              className={({ isActive, isPending }) =>
                isActive
                  ? " text-white text-xl bg-red-500 btn"
                  : isPending
                  ? "pending "
                  : ""
              }
            >
              <span className="flex items-center gap-3">
              <MdManageAccounts></MdManageAccounts>
              Manage Shop

              </span>
            </NavLink>
          </li>
          <li className="flex items-center gap-3">
            <FaChartLine></FaChartLine>
            <NavLink
              to={"/dasbord/Sale-Summary"}
              className={({ isActive, isPending }) =>
                isActive
                  ? " text-white bg-red-500 btn"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Sale-Summary
            </NavLink>
          </li>
          <hr className="border border-red-300 mt-9" />
          <div className="flex flex-col mt-[30px] gap-4 text-xl font-bold">
            <Link
             to={"/"} className="btn bg-red-500 text-white">
              Home
            </Link>
            <button
              onClick={() => {
                logOutUser();
                navigate("/");
              }}
              className="btn bg-red-500 text-white"
            >
              logOut{" "}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AdminNavbar;
