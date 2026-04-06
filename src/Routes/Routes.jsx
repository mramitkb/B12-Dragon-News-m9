import { createBrowserRouter } from "react-router";
import HomeOutlet from "../pages/HomeOutlet";
import MainLayout from "../layouts/MainLayout";
import CategoryNews from "../pages/CategoryNews";
import NewsDetails from "../pages/NewsDetails";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>Error...404</p>,
    children: [
      {
        index: true,
        element: <HomeOutlet></HomeOutlet>,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        element: <CategoryNews></CategoryNews>,
      },
      {
        path: "/newsDetails/:id",
        loader: () => fetch("/news.json"),
        element: <NewsDetails></NewsDetails>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);
