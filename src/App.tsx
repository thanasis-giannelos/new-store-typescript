import { RouterProvider } from "react-router";
import { router } from "./router/router";
import { AuthProvider } from "./auth/AuthContext";
import { CartProvider } from "./cart/CartContext";

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />;
      </CartProvider>
    </AuthProvider>
  );
};
