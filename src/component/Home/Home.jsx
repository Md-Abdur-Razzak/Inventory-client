import Bannder from "./HomePages/Bannder";
import Contack from "./HomePages/Contack";
import Footer from "./HomePages/Footer";
import Testimonial from "./HomePages/Testimonial";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div>
          <Bannder></Bannder>
          <Testimonial></Testimonial>
          <Contack></Contack>
          <Footer></Footer>
        </div>
    );
};

export default Home;