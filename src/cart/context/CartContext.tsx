import React, { createContext, useState } from "react";
import Product from "../../products/product";

export type CartContextType = {
  items: Product[];
  addToCart: (product: Product) => void;
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
  {} as CartContextType                                                         //den skerw ti akribws kanei auto
);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  }

  function removeFromCart(product: Product) {
    if (cartItems.length > 0) {
      setCartItems((prevCartItems) => {
        const thatIndex = prevCartItems.indexOf(product);
        return [
          ...prevCartItems.slice(0, thatIndex),
          ...prevCartItems.slice(thatIndex + 1),
        ];
      });
    }
  }

  function clearCart() {
    setCartItems([]);
  }

  function getGroupById() {
    return cartItems.reduce(
      (group: { [key: string]: Product[] }, product: Product) => {
        const [productId] = Object.keys(product);
        group[productId] = group[productId] ?? [];
        group[productId].push(product);
        return group;
      },
      {}
    );
  }

  function getTotalCost() {
    return cartItems.reduce(
      (totalCost: number, product: Product) => {
        const [productProps] = Object.values(product);
        return totalCost += productProps.price;
      },
      0
    );
  }

  function getTotalAmount() {
    return cartItems.length;
  }

  const contextValue: CartContextType = {
    items: cartItems,
    addToCart,
    getGroupById,
    removeFromCart,
    clearCart,
    getTotalCost,
    getTotalAmount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
