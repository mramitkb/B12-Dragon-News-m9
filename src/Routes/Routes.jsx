import { createBrowserRouter } from "react-router";
import HomeOutlet from "../pages/HomeOutlet";
import MainLayout from "../layouts/MainLayout";
import CategoryNews from "../pages/CategoryNews";
import NewsDetails from "../pages/NewsDetails";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AuthLayout from "../layouts/AuthLayout";
import About from "../pages/About";
import Career from "../pages/Career";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>Error...404</p>,
    hydrateFallbackElement: <p>Error ... 404</p>,
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
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/career",
        element: <Career></Career>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
