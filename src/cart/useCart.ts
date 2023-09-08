import { useState } from "react";
import Product from "../products/product";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  }

  function removeFromCart(product: Product) {
    if (cartItems.length > 0 && cartItems.includes(product)) {
      const [productProps] = Object.values(product);
      setCartItems((prevCartItems) => {
        const alternative = prevCartItems.map((p) => {
          const [pProps] = Object.values(p);
          return pProps;
        });
        const thatIndex = alternative.indexOf(productProps);
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

  function getTotalCost() {
    return cartItems.reduce((totalCost: number, product: Product) => {
      const [productProps] = Object.values(product);
      return (totalCost += productProps.price);
    }, 0);
  }

  function getTotalAmount() {
    return cartItems.length;
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

  return {
    items: cartItems,
    addToCart,
    getGroupById,
    removeFromCart,
    clearCart,
    getTotalCost,
    getTotalAmount,
  };
};
