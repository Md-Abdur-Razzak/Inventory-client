import { useContext } from "react";
import { MyContext } from "./AuthProvider";
import Loding from "../component/Home/loder/Loding";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loder}=useContext(MyContext)
    if (loder) {
        return <Loding></Loding>
    }
    if (user) {
        return children
    } 
    return <Navigate to={'/login'}></Navigate>      
    
};

export default PrivateRoute;