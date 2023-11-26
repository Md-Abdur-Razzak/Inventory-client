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
import UpdateProduct from "../component/DasBord/UserDasBord/UpdateProduct";
import SalesCollection from "../component/DasBord/UserDasBord/SalesCollection";
import ChackOutPage from "../component/DasBord/UserDasBord/ChackOutPage";
import PaymentManager from "../component/DasBord/UserDasBord/PaymentManager";
import PaymentCard from "../component/DasBord/UserDasBord/PaymentCard";
import SalesSummry from "../component/DasBord/UserDasBord/SalesSummry";
import MangeShopAdmin from "../component/DasBord/AdminDashbord/MangeShopAdmin";

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
        },
        {
            path:"/dasbord/updateProduct/:id",
            element:<UpdateProduct></UpdateProduct>,
            loader:({params})=>fetch(`http://localhost:5000/singleShopProduct/${params.id}`)
        },
        {
            path:"/dasbord/paymentCord/:id",
            element:<PaymentCard></PaymentCard>,
            loader:({params})=>fetch(`http://localhost:5000/limit/${params.id}`)
        },
        {
            path:"/dasbord/sales",
            element:<SalesCollection></SalesCollection>
            
        },
        {
            path:"/dasbord/chackOut",
            element:<ChackOutPage></ChackOutPage>
            
        },
        {
            path:"/dasbord/salesSummry",
            element:<SalesSummry></SalesSummry>
            
        },
        {
            path:"/dasbord/paymentManager",
            element:<PaymentManager></PaymentManager>,
            loader:()=>fetch('http://localhost:5000/limit')
            
        },
        // ---------------------dasbord-------------
        {
            path:"/dasbord/manageshop",
            element:<MangeShopAdmin></MangeShopAdmin>
            
            
        }
    ]
}

])