import { createBrowserRouter } from "react-router";
import Error from "../Page/Error";
import Layout from '../Layout/Layout'
import Home from "../Home/Home";
import AddTask from "../Task/AddTask";

export const router = createBrowserRouter([
    {
        path: '/',
        Component:Layout,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/addtask',
                Component: AddTask
            }
        ]
    },
    {
    path: '/*',
    Component: Error
    }
]);