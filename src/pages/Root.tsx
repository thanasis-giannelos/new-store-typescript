import { Outlet } from "react-router";
import Header from "../Layout/Header";
import { CartProvider } from "../cart/CartContext";
import { AuthProvider } from "../auth/AuthContext";

function Root() {
  return (
    <AuthProvider>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </AuthProvider>
  );
}

export default Root;
