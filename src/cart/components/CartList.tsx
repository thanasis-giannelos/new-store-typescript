import { Container } from "@mui/material";
import React from "react";
import Product from "../../products/product";
import CartListItem from "./CartListItem";

type CartListProps = {
  cart: Product[];
};

const CartList: React.FC<CartListProps> = ({ cart }) => {
  return (
    <section>
      <ul>
        <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", gap: "1rem"}}>
          {cart.map((item, index) => (
            <CartListItem key={index} item={item} />
          ))}
        </Container>
      </ul>
    </section>
  );
};

export default CartList;
