import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Blog from "./blog"
import Challenges from "./Challenges"



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
    {
        path: '/Challenges',
        element: <Challenges />,
    }
])  