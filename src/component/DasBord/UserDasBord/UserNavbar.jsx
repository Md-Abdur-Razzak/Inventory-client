import { DiGhostSmall } from "react-icons/di";
import { FaChartLine } from "react-icons/fa";
import { MdManageAccounts, MdPayment } from "react-icons/md";
import { PiShoppingCartFill } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { useContext } from "react";
import { MyContext } from "../../../Route/AuthProvider";
import logo from "../../../assets/logo-removebg-preview.png";
const UserNavbar = () => {
    const {user,logOutUser}=useContext(MyContext)
    const navigate = useNavigate()
  return (
    <div>
      <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
         <div className="flex justify-between items-center px-3">
         <label htmlFor="my-drawer" className="btn bg-red-300 text-2xl font-extrabold drawer-button">
           <AiOutlineBars/>
          </label>
          <div className="">
            <img className="w-[60px] ml-16 max-[420px]:hidden rounded-full" src={logo} alt="" />
          </div>
          <div className=" flex flex-col justify-center items-center">
              
                {user&& <img className="w-[50px]" src={user?.photoURL} alt=""  />}
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
          <ul className="flex flex-col text-xl font-bold   gap-6  p-4 min-[426]:w-80 h-[100vh] bg-base-200 max-[426px]:text-sm  max-[426px]:w-30 ">
            <li className="flex items-center gap-3">
              <MdManageAccounts></MdManageAccounts>
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
                Product Management
              </NavLink>
            </li>
            <li className="flex items-center gap-3">
              <DiGhostSmall></DiGhostSmall>
              <NavLink
                to={"/dasbord/sales"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-white bg-red-500 btn"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Sales-Collection
              </NavLink>
            </li>
            <li className="flex items-center gap-3">
              <PiShoppingCartFill></PiShoppingCartFill>
              <NavLink
                to={"/dasbord/chackOut"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-white bg-red-500 btn"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Check-Out
              </NavLink>
            </li>
            <li className="flex items-center gap-3">
              <MdPayment></MdPayment>
              <NavLink
                to={"/dasbord/paymentManager"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-white bg-red-500 btn"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Subscription & Payment
              </NavLink>
            </li>
            <li className="flex items-center gap-3">
              <FaChartLine></FaChartLine>
              <NavLink
                to={"/dasbord/salesSummry"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? " text-white bg-red-500 btn"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Sales Summary
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
    </div>
  );
};

export default UserNavbar;
