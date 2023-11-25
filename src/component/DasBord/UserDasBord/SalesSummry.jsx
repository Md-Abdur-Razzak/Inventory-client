import { useContext, useEffect, useState } from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";
import { MyContext } from "../../../Route/AuthProvider";

const SalesSummry = () => {
  const axiosSecure = AdminSecoure();
  const { user } = useContext(MyContext);
  const [salesData, setSalesData] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/paindInfo?email=${user?.email}`).then((res) => {
      setSalesData(res.data);
    });
  }, [user?.email, axiosSecure]);

  const saleingPrice = salesData?.reduce(
    (sum, totalPrice) => sum + totalPrice.sellingPrice,
    0
  );
  const productCost = salesData?.reduce(
    (sum2, totalPrice2) => sum2 + parseInt(totalPrice2.ProductionCost),
    0
  );
  const productProfit = saleingPrice - productCost;
  console.log({ productCost, saleingPrice, productProfit });

  return (
    <div>
      {salesData.length == 0 ? (
        "Product is Empty"
      ) : (
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>

            <div className="stat-value">{saleingPrice}</div>
            <div className="stat-desc text-xl">Total sale </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>

            <div className="stat-value">{productCost}</div>
            <div className="stat-desc text-xl">Total Invest</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>

            <div className="stat-value">{productProfit}</div>
            <div className="stat-desc text-xl">Total Profit</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesSummry;
