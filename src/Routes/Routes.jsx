import { createBrowserRouter } from "react-router";
import Error from "../Page/Error";
import Layout from '../Layout/Layout'
import Home from "../Home/Home";
import AddTask from "../Task/AddTask";
import BrowseTask from "../Page/BrowseTask/BrowseTask";
import MyPostedTask from "../Page/MyPosted/MyPostedTask";

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
            },
            {
                path:'/browseTask',
                Component: BrowseTask
            },
            {
                path: '/myPostedTask',
                Component: MyPostedTask
            }
        ]
    },
    {
    path: '/*',
    Component: Error
    }
]);