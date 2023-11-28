import { Helmet } from "react-helmet-async";
import Bannder from "./HomePages/Bannder";
import Contack from "./HomePages/Contack";
import Footer from "./HomePages/Footer";
import Testimonial from "./HomePages/Testimonial";
import Navbar from "./Navbar/Navbar";
import FaQPage from "./HomePages/FaQPage";
import OurServices from "./HomePages/OurServices";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StoreShop ||Home</title>
      </Helmet>
      <Bannder></Bannder>
 <OurServices></OurServices> 
       <FaQPage></FaQPage>
 <Testimonial></Testimonial>
      <Contack></Contack>
      <Footer></Footer>  
    </div>
  );
};

export default Home;
