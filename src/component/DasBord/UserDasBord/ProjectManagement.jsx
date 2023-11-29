import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../../Route/AuthProvider";
import AdminSecoure from "../../../Hook/AdminSecoure";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import PublicApi from "../../../Hook/PublicApi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ProjectManagement = () => {
  const { user } = useContext(MyContext);
  const axiosSecure = AdminSecoure();
  const axiosPublic = PublicApi();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allProduct", user?.email, axiosSecure],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/shopProduct?email=${user?.email}`
      );
      return data;
    },
  });

  const handelDelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be deleted this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/shopProduct/${id}`).then((res) => {
          Swal.fire({
            title: "Deleted!",
            text: "Your Prodect has been deleted.",
            icon: "success",
          });

          refetch();
        });
      }
    });
  };

  return (
    <div className="w-[80%] mx-auto">
      <Helmet>
        <title>StoreShop ||Product Management</title>
      </Helmet>
      {data?.length == 0 ? (
        <div className="h-[80vh] flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold ">Please add a Product as You don't have any Product</h1>
          <Link to={"/dasbord/addProduct"}>
            <button className="btn bg-red-400 text-white text-xl mt-9">
              Add Product
            </button>
          </Link>
        </div>
      ) : (
        <>
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
                <thead className="bg-red-200  ">
                  <tr>
                    <th>
                      <label>#</label>
                    </th>

                    <th>Image</th>
                    <th>Product Name</th>
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
                          <label>{index + 1}</label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={item?.display_url}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </td>
                        <td>{item?.shopName}</td>
                        <td>{item?.quantity}</td>
                        <td>{item?.SaleCount}</td>

                        <th>
                          <Link to={`/dasbord/updateProduct/${item._id}`}>
                            {" "}
                            <button className="btn bg-green-300 text-xl ">
                              <FaEdit></FaEdit>
                            </button>
                          </Link>
                        </th>
                        <th>
                          <button
                            onClick={() => handelDelet(item._id)}
                            className="btn text-xl bg-red-500 text-white"
                          >
                            <MdDelete></MdDelete>
                          </button>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectManagement;
