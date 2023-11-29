import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { GrFormNextLink } from "react-icons/gr";
const ALLPilans = () => {
  useEffect(() => {

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', // Animation easing
     once: false,
   
    });
  }, []);
  return (
    <div className="lg:w-[80%] md:w-[80%] w-[90%] mx-auto mt-[170px]">
      <div className="flex justify-center text-4xl font-extrabold mt-[100px]">
        Find a plan that’s right for your Business
      </div>
      <hr className=" border-4 border-pink-500 mt-3" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        <div  data-aos="fade-up" className="border border-t-4 rounded-md border-pink-500  p-3 ">
          <h1 className="text-3xl flex justify-center font-extrabold">
           Basic
          </h1>
          <div className="flex justify-center mt-3  rounded-full">
            <div className="h-[100px]  w-[100px] flex flex-col items-center flex-center rounded-full bg-red-400">
              <h1 className="mt-5 text-3xl font-bold text-white">200</h1>
              <h1 className="text-xl">limit</h1>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 mt-3">
            <h1 className="text-3xl font-bold">$10</h1>
            
            <button className="btn bg-red-500 text-white text-xl">See More<GrFormNextLink/></button>
          </div>
        </div>
        <div  data-aos="fade-up" className=" border border-t-4 rounded-md border-pink-500 p-3 ">
          <h1 className="text-3xl flex justify-center font-extrabold">
          Standart
          </h1>
          <div className="flex justify-center mt-3 rounded-full">
            <div className="h-[100px]  w-[100px] flex flex-col items-center flex-center rounded-full bg-red-400">
              <h1 className="mt-5 text-3xl font-bold text-white">450</h1>
              <h1 className="text-xl">limit</h1>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 mt-3">
            <h1 className="text-3xl font-bold">$20</h1>
           
            <button className="btn bg-red-500 text-white text-xl">See More<GrFormNextLink/></button>
          </div>
        </div>
        <div  data-aos="fade-up" className="border-t-4 rounded-md border-pink-500 border p-3 ">
          <h1 className="text-3xl flex justify-center  font-extrabold">
            Advanced
          </h1>
          <div className="flex justify-center rounded-full">
            <div className="h-[100px]  w-[100px] mt-3 flex flex-col items-center flex-center rounded-full bg-red-400">
              <h1 className="mt-5 text-3xl font-bold text-white">1500</h1>
              <h1 className="text-xl">limit</h1>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 mt-3">
            <h1 className="text-3xl font-bold">$50</h1>
            
            <button className="btn bg-red-500 text-white text-xl">See More<GrFormNextLink/></button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ALLPilans;
