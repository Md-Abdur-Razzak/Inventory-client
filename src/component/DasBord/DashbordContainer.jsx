import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import AdminSecoure from "../../Hook/AdminSecoure";
import { MyContext } from "../../Route/AuthProvider";
import Loding from "../Home/loder/Loding";
import { Helmet } from "react-helmet-async";
import Footer from "../Home/HomePages/Footer";
import { DiGhostSmall } from "react-icons/di";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import logo from "../../assets/logo-removebg-preview.png";

import UserNavbar from "./UserDasBord/UserNavbar";
import AdminNavbar from "./AdminDashbord/AdminNavbar";

const DashbordContainer = () => {
  const axoisSecure = AdminSecoure();
  const { user, logOutUser } = useContext(MyContext);
  const [chackuser, setUser] = useState({});
  const [loding, setLoding] = useState(true);
  const navigator = useNavigate();
  useEffect(() => {
    axoisSecure.get(`/user?email=${user?.email}`).then((res) => {
      setUser(res.data);
      setLoding(false);
    });
  }, [axoisSecure, user?.email]);
  if (loding) {
    return <Loding></Loding>;
  }

  return (
    <div>
      <Helmet>
        <title>StoreShop || Deshbord</title>
      </Helmet>
      {
        chackuser?.roll == "manager" ?   <div className="xl:hidden relative mt-0 w-full bg-pink-200">
        <UserNavbar></UserNavbar></div>
        :
        <div className="xl:hidden relative mt-0 w-full bg-pink-200">
        <AdminNavbar></AdminNavbar>
       
      </div>
      }
    
      <div className="xl:grid grid-cols-12 gap-12 ">
        <div className="xl:block hidden col-span-3 bg-red-100 h-[100vh] px-3">
          <div className="flex justify-center mt-9">
            <img className="w-[100px]" src={logo} alt="" />
          </div>
          <div>
            {chackuser?.roll == "admin" && (
              <ul className="xl:flex xl:flex-col hidden text-xl font-bold  mt-[15px]   gap-6 ml-4">
                <li className="flex items-center gap-3">
                  <MdManageAccounts></MdManageAccounts>
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
                    Manage Shop
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
              </ul>
            )}
            {chackuser?.roll == "manager" && (
              <div>
                <ul className="xl:flex xl:flex-col hidden text-xl font-bold   gap-6 mt-[15px] ml-4">
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
                </ul>
              </div>
            )}
          </div>
          <hr className="border border-red-300 mt-9" />
          <div className="flex flex-col mt-[30px] gap-4 text-xl font-bold">
            <Link to={"/"} className="btn bg-red-500 text-white">
              Home
            </Link>
            <button
              onClick={() => {
                logOutUser();
                navigator("/");
              }}
              className="btn bg-red-500 text-white"
            >
              logOut{" "}
            </button>
          </div>
        </div>
        <div className="xl:col-span-9  col-span-12 h-[100%]  ">
          <div className="mt-4 md:p-5 p-2">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default DashbordContainer;
