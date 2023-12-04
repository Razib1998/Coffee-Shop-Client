import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import Home from "../components/Home/Home";
import AddCoffee from "../components/AddCoffee/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";

const myRoute = createBrowserRouter([{
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"/addCoffee",
            element: <AddCoffee></AddCoffee>

        },
        {
            path: "/updateCoffee",
            element:<UpdateCoffee></UpdateCoffee>
        }
    ]
}]);

export default myRoute;
