
import { Helmet } from "react-helmet-async";


const WatchDemo = () => {
  return (
    <div className=" mt-12">
     <Helmet>
        <title>StoreShop ||WatchDemo</title>
     </Helmet>
        <div className="flex justify-center text-4xl font-extrabold ">
            <h1>Overview Our Website</h1>
        </div>
     <div className="flex justify-center mt-9">
     <iframe
        width="760"
        height="415"
        src="https://www.youtube.com/embed/4TPkIMNusgw?si=YSJIXnS9rJTmU_ZL&amp;start=38"
        title=""
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
       
      ></iframe>
     </div>
    </div>
  );
};

export default WatchDemo;
