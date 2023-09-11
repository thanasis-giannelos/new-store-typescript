import React, { createContext } from "react";
import Product from "../products/product";
import { useCart } from "./useCart";

export type CartContextType = {
  items: Product[];
  addToCart: (product: Product) => void;
  increase: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  getGroupById: () => { [key: string]: Product[] };
  getTotalCost: () => number;
  getTotalAmount: () => number;
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const {
    items,
    addToCart,
    increase,
    getGroupById,
    removeFromCart,
    clearCart,
    getTotalCost,
    getTotalAmount,
  } = useCart();

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        increase,
        getGroupById,
        removeFromCart,
        clearCart,
        getTotalCost,
        getTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
