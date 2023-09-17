import { createBrowserRouter } from "react-router-dom";
import Cart from "../cart/Cart";
import Home from "../pages/Home";
import Root from "../pages/Root";
import ProductDetails from "../products/ProductDetails";
import Products from "../products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "login",
      //   element: <LogIn />,
      // },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "categories/:category",
        element: <Products />,
      },
    ],
  },
]);
