import { Container, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import CartActions from "./CartActions";
import { CartContext } from "./CartContext";
import CartList from "./CartList";
import CartSummary from "./CartSummary";

const Cart: React.FC = () => {
  const [orderSent, setOrderSent] = useState(false);

  const { getGroupById, getTotalAmount, getTotalCost } =
    useContext(CartContext);

  const obj = getGroupById();
  // const cartItems = Object.keys(obj).map((id) => obj[id][0]);
  const cartItems = Object.values(obj).map((arr) => arr[0]);

  return (
    <div>
      {!orderSent && getTotalAmount() !== 0 && (
        <>
          <Container
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginY: 5,
              borderBottom: "5px rgb(255, 193, 7) solid",
              paddingY: "12px",
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
