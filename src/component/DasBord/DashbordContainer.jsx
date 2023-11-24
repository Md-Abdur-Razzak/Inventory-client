import { NavLink, Outlet } from "react-router-dom";

const DashbordContainer = () => {
  return (
    <div>
      <div className="w-[150px]">
        <ul className="flex flex-col gap-3">
        <NavLink
          to={"/dasbord/projectManaget"}
          className={({ isActive, isPending }) =>
            isActive ? " text-white bg-red-500 btn" : isPending ? "pending" : ""
          }
        >
          projectManaget
        </NavLink>
        <NavLink
          to={"/dasbord/projectManaget"}
          className={({ isActive, isPending }) =>
            isActive ? " text-white bg-red-500 btn" : isPending ? "pending" : ""
          }
        >
          Sales-Collection

        </NavLink>
        <NavLink
          to={"/dasbord/projectManaget"}
          className={({ isActive, isPending }) =>
            isActive ? " text-white bg-red-500 btn" : isPending ? "pending" : ""
          }
        >
        Check-Out

        </NavLink>
        <NavLink
          to={"/dasbord/projectManaget"}
          className={({ isActive, isPending }) =>
            isActive ? " text-white bg-red-500 btn" : isPending ? "pending" : ""
          }
        >
      Subscription & Payment

        </NavLink>
        <NavLink
          to={"/dasbord/projectManaget"}
          className={({ isActive, isPending }) =>
            isActive ? " text-white bg-red-500 btn" : isPending ? "pending" : ""
          }
        >
        Sales Summary
        </NavLink>
        </ul>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashbordContainer;
