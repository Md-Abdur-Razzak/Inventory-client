import logo from "../../../assets/logo-removebg-preview.png";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaGithub, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-[100px] bg-[rgb(31,75,100)] lg:h-[400px] md:h-[900px] ">
      <div className="md:flex md:justify-between flex-wrap  w-[80%] bg-red pt-[100px] mx-auto text-white">
        <div className="md:w-[300px] flex flex-col justify-center items-center gap-3 ">
          <img className="w-9" src={logo} alt="" />
          <h1> StoreShop </h1>
          <p className="text-justify">
            Streamline Your Inventory Control with Precision and Efficiency
            Discover Our Comprehensive Inventory Management System Today
          </p>
          <div className="flex gap-2 text-3xl font-bold">
            <h1>
              {" "}
              <i className="fa-brands fa-facebook"></i>{" "}
            </h1>
            <h1>
              <i className="fa-brands fa-twitter"></i>{" "}
            </h1>
          </div>
        </div>
        <div className="">
          <h1 className="pt-4 text-2xl">contact information</h1>
          <div className="pt-4 ">
            <div className="flex items-center gap-3 ">
              <h1>
                <MdOutlineMail></MdOutlineMail>
              </h1>
              <h1 className="">razzak445444@gmail.com</h1>
            </div>
            <div className="flex items-center gap-3 ">
              <h1>
                <FaMobileAlt></FaMobileAlt>
              </h1>
              <h1 className="">01321582262</h1>
            </div>
          
          </div>
        </div>
        <div>
          <h1 className=" pt-4 text-2xl">address</h1>
          <h1 className="mt-2">2rd floor,Bashundhara Road</h1>
          <h1 className="mt-2 uppercase"> social media</h1>
          <div className="text-4xl mt-2 flex gap-3 items-center">
              <a className="cursor-pointer" href="https://www.facebook.com/raju.aumed?mibextid=ZbWKwL"> <FaFacebook></FaFacebook></a>
              <Link><FaGithub></FaGithub> </Link>
          </div>
          
        </div>
      </div>
      <hr className="" />
      <div className="flex justify-center text-[#918987] mt-3 md:text-xl">
        Copyright © 2023 STORESHOP. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
