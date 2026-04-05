import { createBrowserRouter } from "react-router";
import HomeOutlet from "../pages/HomeOutlet";
import MainLayout from "../layouts/MainLayout";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <p>Error...404</p>,
        children: [
            {
                index: true,
                element: <HomeOutlet></HomeOutlet>
            },
            {
                path: "/category/:id",
                loader: () => fetch("/news.json"),
                element: <CategoryNews></CategoryNews>
            }
        ]
    }
])