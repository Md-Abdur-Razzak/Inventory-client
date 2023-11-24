import { createBrowserRouter } from "react-router-dom";
import Maincontainer from "../component/container/Maincontainer";
import Home from "../component/Home/Home";

export const myRoute = createBrowserRouter([{
    path:"/",
    element:<Maincontainer></Maincontainer>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        }
    ]
}])