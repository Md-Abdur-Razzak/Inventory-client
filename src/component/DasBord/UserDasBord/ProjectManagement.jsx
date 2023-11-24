import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../../Route/AuthProvider";
import AdminSecoure from "../../../Hook/AdminSecoure";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ProjectManagement = () => {
  const { user } = useContext(MyContext);
  const axiosSecure = AdminSecoure();
  const { data, isLoading } = useQuery({
    queryKey: ["allProduct", user?.email, axiosSecure],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/shopProduct?email=${user?.email}`
      );
      return data;
    },
  });
  if (isLoading) {
    return <h1>loding---------</h1>;
  }
  console.log(data);
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-between text-xl font-bold items-center">
        <h1 className="">Totall Product : {data?.length}</h1>
        <Link to={"/dasbord/addProduct"}>
          <button className="btn bg-red-400 text-white text-xl">
            Add Product
          </button>
        </Link>
      </div>

      <div>
        <div className="overflow-x-auto rounded-md mt-9">
          <table className="table">
            {/* head */}
            <thead className="bg-red-400  ">
              <tr>
                <th>
                  <label>#</label>
                </th>

                <th>Image</th>
                <th>shop Name</th>
                <th>quantity</th>
                <th>SaleCount</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data?.map((item, index) => {
                return (
                    <tr key={item._id}>
                    <th>
                      <label>
                       {index+1}
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item?.display_url} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                         
                        </div>
                      </div>
                    </td>
                    <td>
                      {item?.shopName}
                    </td>
                    <td>{item?.quantity}</td>
                    <td>{item?.SaleCount}</td>
                    <th>
                     <Link> <button className="btn bg-green-300 text-xl "><FaEdit></FaEdit></button></Link>
                    </th>
                    <th>
                      <button className="btn text-xl bg-red-500 text-white"><MdDelete></MdDelete></button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
