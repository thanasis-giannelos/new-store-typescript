import { Outlet } from "react-router";
import Header from "../Layout/Header";
import { CartProvider } from "../cart/context/CartContext";

function Root() {
  return (
    <CartProvider>
      <Header />
      <Outlet/>
    </CartProvider>
  )
}

export default Root;