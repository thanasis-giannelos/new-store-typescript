import { createBrowserRouter } from "react-router-dom";
import Cart from "../cart/Cart";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Root from "../pages/Root";
import ProductDetails from "../products/ProductDetails";

// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route index element={<Home />} />
//         <Route path="products/:category" element={<Products/>}/>
//         <Route path="/:id" element={<ProductDetails/>}/>
//       <Route path="cart" element={<Cart />} />
//       <Route path="logIn" element={<LogIn />} />
//     </Route>
//   )
// );

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
