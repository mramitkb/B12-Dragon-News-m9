import { createBrowserRouter } from "react-router";
import HomeOutlet from "../pages/HomeOutlet";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <p>Error...404</p>,
        children: [
            {
                index: true,
                element: <HomeOutlet></HomeOutlet>
            }
        ]
    }
])