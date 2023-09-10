import { Outlet } from "react-router";
import Header from "../Layout/Header";
import { CartProvider } from "../cart/CartContext";
import { AuthProvider } from "../auth/AuthContext";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Root;
