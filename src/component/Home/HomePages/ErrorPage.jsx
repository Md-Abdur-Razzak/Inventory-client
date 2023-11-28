import { Link } from "react-router-dom";
import errorPage from '../../../assets/404-removebg.png'
import { IoMdArrowRoundBack } from "react-icons/io";


const ErrorPage = () => {
    
    return (
        <div className="flex flex-col justify-center items-center h-[90vh]">
            <div >
                <img src={errorPage} alt="" sizes=""  />
            </div>
            <button className="btn bg-red-400 text-white text-xl font-bold">
                <span><IoMdArrowRoundBack></IoMdArrowRoundBack></span>
                <Link to={'/'}>Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;