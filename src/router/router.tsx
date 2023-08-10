import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Cart from "../cart/components/Cart";
import Root from "../pages/Root";
import ProductDetails from "../products/ProductDetails";
import Products from "../products/Products";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Products />} />
        <Route path="products/:category" element={<Products/>}/>
        <Route path="/:id" element={<ProductDetails/>}/>
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);
