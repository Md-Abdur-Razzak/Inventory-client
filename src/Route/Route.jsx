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
import SaleSummryAdmin from "../component/DasBord/AdminDashbord/SaleSummryAdmin";
import WatchDemo from "../component/Home/HomePages/WatchDemo";
import ErrorPage from "../component/Home/HomePages/ErrorPage";

export const myRoute = createBrowserRouter([{
    path:"/",
    element:<Maincontainer></Maincontainer>,
    errorElement:<ErrorPage></ErrorPage>,
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
        },
        {
            path:'/Watch-Demo',
            element:<WatchDemo></WatchDemo>
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
            loader:({params})=>fetch(`https://inventory-server-azure.vercel.app/singleShopProduct/${params.id}`)
        },
        {
            path:"/dasbord/paymentCord/:id",
            element:<PaymentCard></PaymentCard>,
            loader:({params})=>fetch(`https://inventory-server-azure.vercel.app/limit/${params.id}`)
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
            loader:()=>fetch('https://inventory-server-azure.vercel.app/limit')
            
        },
        // ---------------------dasbord-------------
        {
            path:"/dasbord/manageshop",
            element:<MangeShopAdmin></MangeShopAdmin>
            
            
        },
        {
            path:"/dasbord/Sale-Summary",
            element:<SaleSummryAdmin></SaleSummryAdmin>
            
            
        }
    ]
}

])