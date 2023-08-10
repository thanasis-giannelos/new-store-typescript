import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

type CartActionsProps = {
  onOrder: (arg: boolean) => void;
};

const CartActions: React.FC<CartActionsProps> = ({ onOrder }) => {
  const { clearCart } = useContext(CartContext);

  const clickHandler = () => {
    onOrder(true);
    clearCart();
  };

  return <Button variant="contained" size="small" onClick={clickHandler}>Checkout</Button>;

};

export default CartActions;
