import product from "../../../assets/product-removebg-preview.png";
import chackOut from "../../../assets/chack.png";
import productAdd from "../../../assets/product-package-add-icon.webp";
import delet from "../../../assets/delet.png";
import sales from "../../../assets/salesSummary.png";
import payment from "../../../assets/saleng2.png";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const OurServices = () => {
  useEffect(() => {
        
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false, 
    });
  }, []);
  return (
    <div className="xl:w-[80%] lg:w-[90%] w-[90%] mx-auto mt-[90px]">
      <div className="flex justify-center ">
        <h1 className=" text-4xl font-extrabold">Our Services </h1>
      </div>
      <hr className=" border-4 border-pink-500 mt-5" />
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-col-1 gap-4 mt-9">
        <div  data-aos="fade-right" className="border border-t-4 border-pink-400 rounded-md p-4">
          <div className=" flex justify-center  ">
            <img
              className="bg-pink-100 w-[150px] h-[150px]  rounded-full"
              src={product}
              alt=""
            />
          </div>
          <h1 className="text-3xl font-bold flex justify-center p-3">Product Management</h1>
          <h1 className="text-justify mt-2">
            This includes adding new products, updating existing ones, assigning
            unique identifiers ( such as SKU numbers), categorizing items,
            managing descriptions, setting pricing, and controlling inventory
            levels.
          </h1>
        </div>
        <div  data-aos="fade-up" className="border border-t-4 border-pink-400 rounded-md p-4">
          <div className=" flex justify-center  ">
            <img
              className="bg-pink-100 w-[150px] h-[150px]  rounded-full"
              src={chackOut}
              alt=""
            />
          </div>
          <h1 className="text-3xl font-bold flex justify-center p-3"> Checkout </h1>
          <h1 className="text-justify">
            Checkout services involve the point-of-sale process where products
            are scanned, identified, and removed from the inventory as they are
            sold. This includes updating inventory levels in real-time,
            generating receipts or invoices, and facilitating a smooth customer
            experience during the purchasing process.
          </h1>
        </div>
        <div  data-aos="fade-down" className="border border-t-4 border-pink-400 rounded-md p-4">
          <div className=" flex justify-center  ">
            <img
              className="bg-pink-100 w-[150px] h-[150px]  rounded-full"
              src={productAdd}
              alt=""
            />
          </div>
          <h1 data-aos="fade-up" className="text-3xl font-bold flex justify-center p-3">Product addition</h1>
          <h1 className="text-justify">
            Product addition involves the inclusion of new items into the
            inventory system. This process includes entering item details,
            assigning identifiers, setting pricing, and ensuring the
            availability of accurate product information across the inventory
            management system
          </h1>
        </div>
        <div  data-aos="fade-up" className="border border-t-4 border-pink-400 rounded-md p-4">
          <div className=" flex justify-center  ">
            <img
              className="bg-pink-100 w-[150px] h-[150px]  rounded-full"
              src={delet}
              alt=""
            />
          </div>
          <h1 data-aos="fade-up" className="text-3xl font-bold flex justify-center p-3"> Product deletion </h1>
          <h1 className="text-justify">
            Product deletion is the removal of items from the inventory
            database. This could be due to items becoming obsolete, damaged
            beyond repair, or for other reasons. It involves updating records,
            adjusting inventory levels, and ensuring accurate data removal from
            the system
          </h1>
        </div>
        <div data-aos="fade-up" className="border border-t-4 border-pink-400 rounded-md p-4">
          <div className=" flex justify-center  ">
            <img
              className="bg-pink-100 w-[150px] h-[150px]  rounded-full"
              src={sales}
              alt=""
            />
          </div>
          <h1 className="text-3xl font-bold flex justify-center p-3">Sales Summary</h1>
          <h1 className="text-justify">
            It includes details such as total sales, revenue generated, products
            sold, best-selling items, trends in customer purchases, and other
            key metrics. Sales summaries help in evaluating performance,
            identifying patterns, and making informed decisions for future
            strategies.
          </h1>
        </div>
        <div data-aos="fade-up" className="border border-t-4 border-pink-400 rounded-md p-4">
          <div className=" flex justify-center  ">
            <img
              className="bg-yellow-100 w-[150px] h-[150px]  rounded-full"
              src={payment}
              alt=""
            />
          </div>
          <h1 className="text-3xl font-bold flex justify-center p-3"> Payment Tracking </h1>
          <h1 className="text-justify">
            Monitoring and recording payments received from customers for the
            products sold or services provided. This involves accurately
            documenting payments against invoices and maintaining updated
            records of outstanding payments.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
