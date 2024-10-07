
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../LayOut/Root";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Pages/User/Login";
import Register from "../Pages/User/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;

