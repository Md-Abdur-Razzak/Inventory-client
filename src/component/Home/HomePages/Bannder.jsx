import { useEffect } from "react";
import bannerImag from "../../../assets/inventory.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Bannder = () => {
    useEffect(() => {
        
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: false, 
        });
      }, []);
    
  return ( 
   
    <div className="  dark:bg-[#230350] mt-3  ">
      <div className="">
        <div  className="lg:flex  md:justify-evenly lg:items-center  ">
          <div  data-aos="fade-right"   className=" lg:w-[45%] w-[80%] mx-auto mt-4">
            <h1 className="font-extrabold md:text-6xl text-4xl py-7 lg:text-left dark:text-white text-center space-y-9">
              Welcome to the <span className="text-pink-500">Store Shop</span>{" "}
              <span className="text-blue-500">Management </span>
            </h1>
            <p className="text-justify dark:text-white text-2xl pb-12 py-6 font-bold">
              Optimize Your Business with Efficient Inventory Management
              Solutions! Streamline operations, reduce costs, and enhance
              productivity with our cutting-edge inventory management system.
            </p>
            <div className="flex md:justify-start justify-center">
              <button className="btn bg-pink-500 text-white">
                Expolore Now
              </button>
            </div>
          </div>
      
          <div   data-aos="fade-up" className="mt-[33px] border-red-400 flex justify-center">
            <img
           
              className="xl:h-[500px] border-red-400 lg:h-[400px]"
              src={bannerImag}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannder;
