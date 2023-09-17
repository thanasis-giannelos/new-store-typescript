import { useState } from "react";
import Product from "../products/product";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function addToCart(product: Product) {
    if (!cartItems.includes(product))
      setCartItems((prevCartItems) => [...prevCartItems, product]);
  }

  function increase(product: Product) {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  }

  function removeFromCart(product: Product) {
    if (cartItems.length > 0 && cartItems.includes(product)) {
      // const [productProps] = Object.values(product);
      setCartItems((prevCartItems) => {
        // const alternative = prevCartItems.map((p) => {
        //   const [pProps] = Object.values(p);
        //   return pProps;
        // });
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

  function getTotalCost() {
    return cartItems.reduce((totalCost: number, product: Product) => {
      // const [productProps] = Object.values(product);
      return (totalCost += product.price);
    }, 0);
  }

  function getTotalAmount() {
    return cartItems.length;
  }

  function getAmountOfProduct(product: Product) {
    let sum = 0;
    cartItems.forEach((item) => {
      if (item.id === product.id) sum += 1;
    });
    return sum;
  }

  function getGroupById() {
    return cartItems.reduce(
      (group: { [key: string]: Product[] }, product: Product) => {
        group[product.id] = group[product.id] ?? [];
        group[product.id].push(product);
        return group;
      },
      {}
    );
  }

  return {
    items: cartItems,
    addToCart,
    increase,
    getGroupById,
    getAmountOfProduct,
    removeFromCart,
    clearCart,
    getTotalCost,
    getTotalAmount,
  };
};
