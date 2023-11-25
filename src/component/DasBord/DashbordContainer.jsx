import { Link, NavLink, Outlet } from "react-router-dom";

const DashbordContainer = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-12 ">
      <div className="col-span-3 bg-red-100 h-[100%] px-3">
        <ul className="flex flex-col text-xl font-bold   gap-6 mt-[100px] ml-4">
        <NavLink
          to={"/dasbord/projectManaget"}
          className={({ isActive, isPending }) =>
            isActive ? " text-white bg-red-500 btn" : isPending ? "pending" : ""
          }
        >
          projectManaget
        </NavLink>
        <NavLink
          to={"/dasbord/sales"}
          className={({ isActive, isPending }) =>
            isActive ? " text-white bg-red-500 btn" : isPending ? "pending" : ""
          }
        >
          Sales-Collection

        </NavLink>
        <NavLink
          to={"/dasbord/chackOut"}
          className={({ isActive, isPending }) =>
            isActive ? " text-white bg-red-500 btn" : isPending ? "pending" : ""
          }
        >
        Check-Out

        </NavLink>
        <NavLink
          to={"/dasbord/payment"}
          className={({ isActive, isPending }) =>
            isActive ? " text-white bg-red-500 btn" : isPending ? "pending" : ""
          }
        >
      Subscription & Payment

        </NavLink>
        <NavLink
          to={"/dasbord/Summary"}
          className={({ isActive, isPending }) =>
            isActive ? " text-white bg-red-500 btn" : isPending ? "pending" : ""
          }
        >
        Sales Summary
        </NavLink>
        </ul>
        <hr className="border border-red-300 mt-9"/>
        <div className="flex flex-col mt-[30px] gap-4 text-xl font-bold">
            <Link to={'/'} className="btn bg-red-500 text-white">Home</Link>
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
