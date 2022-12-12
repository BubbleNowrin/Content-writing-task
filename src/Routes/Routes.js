import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import Profile from "../components/Home/Profile/Profile";
import Test from "../components/Home/Profile/test/Test";
import Main from "../Layouts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/test',
                element: <Test></Test>
            }
        ]
    }
])