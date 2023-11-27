import { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import AdminSecoure from "../../Hook/AdminSecoure";
import { MyContext } from "../../Route/AuthProvider";
import Loding from "../Home/loder/Loding";

const DashbordContainer = () => {
  const axoisSecure = AdminSecoure();
  const { user } = useContext(MyContext);
  const [chackuser, setUser] = useState({});
  const [loding,setLoding]=useState(true)
  useEffect(() => {
    axoisSecure.get(`/user?email=${user?.email}`).then((res) => {
      setUser(res.data);
      setLoding(false)
    });
  }, [axoisSecure, user?.email]);
  if (loding) {
    return <Loding></Loding>
  }

  return (
    <div>
      <div className="grid grid-cols-12 gap-12 ">
        <div className="col-span-3 bg-red-100 h-[100%] px-3">
          {chackuser?.roll == "admin" && (
            <ul className="flex flex-col text-xl font-bold   gap-6 mt-[100px] ml-4">
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
            </ul>
          )}
          {chackuser?.roll == "manager" && (
            <ul className="flex flex-col text-xl font-bold   gap-6 mt-[100px] ml-4">
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
                projectManaget
              </NavLink>
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
            </ul>
          )}
          <hr className="border border-red-300 mt-9" />
          <div className="flex flex-col mt-[30px] gap-4 text-xl font-bold">
            <Link to={"/"} className="btn bg-red-500 text-white">
              Home
            </Link>
            <Link className="btn bg-red-500 text-white">logOut </Link>
          </div>
        </div>
        <div className="col-span-9 h-[100%] ">
          <div className="mt-[50px] p-5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbordContainer;
