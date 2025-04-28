import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProductsDetails from "../pages/ProductsDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,

    //   errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
        {
          path: "/allproducts/:id",
          element: <ProductsDetails />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],

    },
  ]);