import { createBrowserRouter } from "react-router-dom";
import Cart from "../components/cart/Cart";
import ProductDetails from "../components/products/ProductDetails";
import Products from "../components/products/Products";
import Home from '../pages/Home';
import Root from "../pages/Root";

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
