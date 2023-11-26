const Footer = () => {
  return (
    <div className="mt-[100px] bg-[#1f4b8e] lg:h-[400px] md:h-[900px] ">
      <div className="md:flex md:justify-between flex-wrap  w-[80%] bg-red pt-[100px] mx-auto text-white">
        <div className="md:w-[300px] flex flex-col justify-center items-center gap-3 ">
          <img className="w-9" src={""} alt="" />
          <p className="text-justify">
            Technology and electronics refer to the fields of knowledge and the
            physical devices that involve the use of electrical circuits and
            digital systems to process, transmit, store, and manipulate
            information.
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
          <h1 className="pt-4 text-2xl">Resources</h1>
          <div className="pt-4 ">
            <h1 className="">Add Product</h1>
            <h1 className="mt-2">Brads</h1>
            <h1 className="mt-2">Contact</h1>
            <h1 className="mt-2">To salers Product</h1>
          </div>
        </div>
        <div>
          <h1 className=" pt-4 text-2xl">Populer brands</h1>
          <h1 className="mt-2">Apple</h1>
          <h1 className="mt-2">Sony</h1>
          <h1 className="mt-2">Oppo</h1>
          <h1 className="mt-2">Google</h1>
          <h1 className="mt-2">intel</h1>
        </div>
      </div>
      <hr className="" />
      <div className="flex justify-center text-[#918987] mt-3 md:text-xl">
        Copyright © 2023 TechElectroHub. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
