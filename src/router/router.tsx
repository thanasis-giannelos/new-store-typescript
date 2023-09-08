import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Cart from "../cart/Cart";
import Root from "../pages/Root";
import ProductDetails from "../products/ProductDetails";
import Products from "../products/Products";
import LogIn from "../pages/LogIn";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Products />} />
        <Route path="products/:category" element={<Products/>}/>
        <Route path="/:id" element={<ProductDetails/>}/>
      <Route path="cart" element={<Cart />} />
      <Route path="logIn" element={<LogIn />} />
    </Route>
  )
);
