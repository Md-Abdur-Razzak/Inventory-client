import { createBrowserRouter } from "react-router-dom";
import Maincontainer from "../component/container/Maincontainer";
import Home from "../component/Home/Home";
import Registration from "../component/Home/varifiuser/Registration";
import Login from "../component/Home/varifiuser/Login";
import CreateStore from "../component/Home/CreateStore/CreateStore";
import PrivateRoute from "./PrivateRoute";
import DashbordContainer from "../component/DasBord/DashbordContainer";
import ProjectManagement from "../component/DasBord/UserDasBord/ProjectManagement";
import AddProduct from "../component/DasBord/UserDasBord/AddProduct";

export const myRoute = createBrowserRouter([{
    path:"/",
    element:<Maincontainer></Maincontainer>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/registration',
            element:<Registration></Registration>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/Create-Store',
            element:<PrivateRoute><CreateStore></CreateStore></PrivateRoute>
        }
    ]
    
},
{
    path:"/dasbord",
    element:<DashbordContainer></DashbordContainer>,
    children:[
        {
            path:"/dasbord/projectManaget",
            element:<ProjectManagement></ProjectManagement>
        },
        {
            path:"/dasbord/addProduct",
            element:<AddProduct></AddProduct>
        }
    ]
}

])