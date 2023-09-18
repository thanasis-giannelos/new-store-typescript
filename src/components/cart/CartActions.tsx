import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "./CartContext";

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
    <Button
      onClick={clickHandler}
      sx={{ backgroundColor: "rgb(255, 193, 7)", color: "#6c757d" }}
    >
      Checkout
    </Button>
  );
};

export default CartActions;
