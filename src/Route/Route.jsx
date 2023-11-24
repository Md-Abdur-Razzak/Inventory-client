import { createBrowserRouter } from "react-router-dom";
import Maincontainer from "../component/container/Maincontainer";
import Home from "../component/Home/Home";
import Registration from "../component/Home/varifiuser/Registration";
import Login from "../component/Home/varifiuser/Login";
import CreateStore from "../component/Home/varifiuser/CreateStore/CreateStore";

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
            element:<CreateStore></CreateStore>
        }
    ]
}])