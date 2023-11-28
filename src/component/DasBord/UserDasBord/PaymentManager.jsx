import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const PaymentManager = () => {
  const data = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>StoreShop ||Subscription & payment</title>
      </Helmet>
      <div className="grid grid-cols-3 gap-4">
        {data?.map((item) => {
          return (
           <Link to={`/dasbord/paymentCord/${item._id}`}  key={item._id}>
             <div className="bg-red-200 h-[200px] rounded-md flex flex-col gap-5 justify-center items-center">
              <h1 className="text-5xl font-extrabold ">${item.taka}</h1>
              <h1 className="text-3xl font-bold">{item.limit} limit</h1>
            </div>
           </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentManager;
