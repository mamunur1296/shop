import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Main from "./Main";
import Home from "./Home";
import Shop from "./Shop";
import Card from "./Card";
import AboutUs from "./AboutUs";
import { productAndLoderData } from "../utils/productAndLoderData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: productAndLoderData,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/cart",
        element: <Card></Card>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
