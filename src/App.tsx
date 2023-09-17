import { RouterProvider } from "react-router";
import { router } from "./router/router";
import { CartProvider } from "./components/cart/CartContext";
// import { AuthProvider } from "./auth/AuthContext";

export const App: React.FC = () => {
  return (
    // <AuthProvider>
    <CartProvider>
      <RouterProvider router={router} />;
    </CartProvider>
    // </AuthProvider>
  );
};
