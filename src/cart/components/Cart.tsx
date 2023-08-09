import { Container, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import classes from "./Cart.module.css";
import CartActions from "./CartActions";
import CartList from "./CartList";
import CartSummary from "./CartSummary";

const Cart: React.FC = () => {
  const [orderSent, setOrderSent] = useState(false);

  const { getGroupById, getTotalAmount, getTotalCost } =
    useContext(CartContext);

  const obj = getGroupById();
  const cartItems = Object.keys(obj).map((id) => obj[id][0]);

  return (
    <div className={classes.cart}>
      {!orderSent && getTotalAmount() !== 0 && (
        <>
          <Container
            maxWidth="sm"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginY: 5,
              backgroundColor: "inherit",
            }}
          >
            <CartSummary totalPrice={getTotalCost()} />
            <CartActions onOrder={setOrderSent} />
          </Container>
          <CartList cart={cartItems} />
        </>
      )}
      {!orderSent && getTotalAmount() === 0 && (
        <Typography variant="h5" align="center" sx={{ mt: 10 }}>
          Your Cart Is Empty
        </Typography>
      )}
      {orderSent && (
        <Typography variant="h5" align="center" sx={{ mt: 10 }}>
          Order Sent Successfully
        </Typography>
      )}
    </div>
  );
};

export default Cart;
