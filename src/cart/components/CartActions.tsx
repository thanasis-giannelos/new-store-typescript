import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import classes from "./Cart.module.css";

type CartActionsProps = {
  onOrder: (arg: boolean) => void;
};

const CartActions: React.FC<CartActionsProps> = ({ onOrder }) => {
  const { clearCart } = useContext(CartContext);

  const clickHandler = () => {
    onOrder(true);
    clearCart();
  };

  return (
    <div className={classes.actions}>
      <Button variant="contained" onClick={clickHandler}>Order</Button>
    </div>
  );
};

export default CartActions;