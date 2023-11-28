import faq from "../../../assets/faq-removebg-preview.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
const FaQPage = () => {
    useEffect(() => {

        AOS.init({
          duration: 1000,
          easing: 'ease-in-out', // Animation easing
         once: false,
       
        });
      }, []);
  return (
    <div className="xl:w-[80%] lg:w-[90%] w-[80%] mx-auto mt-[100px]">
      <div  data-aos="flip-left" className="flex justify-center text-5xl font-extrabold">
        <h1>
          FA<span className="text-6xl text-pink-500">Q</span>
        </h1>
      </div>
      <hr className=" border-4 border-pink-500 mt-3" />
      <div className="lg:flex items-center justify-between  gap-5 mt-16">
        <div  data-aos="fade-right"  className="flex justify-center items-center">
          <img src={faq} alt="" />
        </div>
        <div  data-aos="fade-up"  className="lg:w-[50%] lg:mt-0 mt-9">
          <div className="collapse collapse-arrow bg-pink-200 ">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              How secure is the data stored in an inventory management system?
            </div>
            <div className="collapse-content">
              <p>
                Security is a top priority for inventory management systems.
                They typically employ robust security measures like encryption,
                authentication protocols, and regular data backups to ensure the
                safety and confidentiality of your inventory data
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-pink-200 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How can I choose the right inventory management system for my
              business?
            </div>
            <div className="collapse-content">
              <p>
                Choosing the right inventory management system involves
                considering factors such as your business size,
                industry-specific requirements, scalability, ease of use,
                integration capabilities, cost-effectiveness, and customer
                support. Conducting a thorough assessment of your business needs
                can help in selecting the most suitable solution.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-pink-200 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How does an inventory management system handle multiple warehouse
              locations?
            </div>
            <div className="collapse-content">
              <p>
                Inventory management systems are designed to handle multiple
                warehouses efficiently. They can track inventory levels across
                various locations, facilitate transfer of stock between
                warehouses, and provide visibility into stock availability at
                each location.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-pink-200 mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            What types of reports and analytics can I generate using an inventory management system?
            </div>
            <div className="collapse-content">
              <p>
                Inventory management systems offer a wide range of reports and
                analytics such as inventory valuation, stock movement history,
                sales performance, purchase order status, supplier performance,
                and more. These reports provide insights crucial for strategic
                decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaQPage;
