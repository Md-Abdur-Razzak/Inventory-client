import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
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

const DashbordContainer = () => {
  const axoisSecure = AdminSecoure();
  const { user,logOutUser } = useContext(MyContext);
  const [chackuser, setUser] = useState({});
  const [loding, setLoding] = useState(true);
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

      <div className="grid grid-cols-12 gap-12 ">
        <div className="col-span-3 bg-red-100 h-[100vh] px-3">
          <div className="flex justify-center mt-9">
            <img className="w-[100px]" src={logo} alt="" />
          </div>
          <div>
            {chackuser?.roll == "admin" && (
              <ul className="flex flex-col text-xl font-bold  mt-[15px]   gap-6 ml-4">
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
              <ul className="flex flex-col text-xl font-bold   gap-6 mt-[15px] ml-4">
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
            )}
          </div>
          <hr className="border border-red-300 mt-9" />
          <div className="flex flex-col mt-[30px] gap-4 text-xl font-bold">
            <Link to={"/"} className="btn bg-red-500 text-white">
              Home
            </Link>
            <button onClick={()=>logOutUser()} className="btn bg-red-500 text-white">logOut </button>
          </div>
        </div>
        <div className="col-span-9 h-[100%] ">
          <div className="mt-4 p-5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashbordContainer;
