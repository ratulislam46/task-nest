import { createBrowserRouter } from "react-router";
import Error from "../Page/Error";
import Layout from '../Layout/Layout'
import Home from "../Home/Home";
import AddTask from "../Task/AddTask";
import BrowseTask from "../Page/BrowseTask/BrowseTask";
import MyPostedTask from "../Page/MyPosted/MyPostedTask";
import TaskDetails from "../Page/BrowseTask/TaskDetails";
import UpdateTask from "../Page/MyPosted/UpdateTask";
import Login from "../auth/Login/Login";
import LogOut from "../auth/LogOut/LogOut";
import Loading from '../Page/Loading/Loading'
import PrivateRouter from "../PrivetRouter/PrivateRouter";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/addtask',
                element: <PrivateRouter>
                    <AddTask></AddTask>
                </PrivateRouter>
            },
            {
                path: '/browseTask',
                Component: BrowseTask,
                loader: () => fetch('http://localhost:3000/addtask'),
                HydrateFallback: Loading
            },
            {
                path: '/addtask/:id',
                element: <PrivateRouter>
                    <TaskDetails></TaskDetails>
                </PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:3000/addtask/${params.id}`),
                HydrateFallback: Loading
            },
            {
                path: '/myPostedTask',
                element: <PrivateRouter>
                    <MyPostedTask></MyPostedTask>
                </PrivateRouter>,
                loader: () => fetch('http://localhost:3000/addtask'),
                HydrateFallback: Loading
            },
            {
                path: '/updateTask/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/addtask/${params.id}`),
                Component: UpdateTask,
                HydrateFallback: Loading
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/logout',
        Component: LogOut
    },
    {
        path: '/*',
        Component: Error
    }
]);