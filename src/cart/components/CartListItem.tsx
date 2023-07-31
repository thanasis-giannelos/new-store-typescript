import { Button } from "@mui/material";
import { useContext } from "react";
import Product from "../../products/product";
import { CartContext } from "../context/CartContext";
import classes from "./CartItem.module.css";

type CartItemsProps = {
  item: Product;
};

const CartItem: React.FC<CartItemsProps> = ({ item }) => {
  const { getGroupById, addToCart, removeFromCart } = useContext(CartContext);

  function addToCartBtnHandler() {
    addToCart(item);
  }

  function removeFromCartBtnHandler() {
    removeFromCart(item);
  }

  return (
    <li className={classes.cartItem}>
      {/* <div className={classes.imageContainer}>
        <img src={img} alt={'cart_item'} className={classes.image} />
      </div> */}
      <div>
        <h3>{item.title}</h3>
        <div className={classes.summary}>
          <span className={classes.price}>${item.price}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <span className={classes.amount}>x{getGroupById()[item.id].length}</span>
        <Button variant="contained" onClick={addToCartBtnHandler}>+</Button>
        <Button variant="contained" onClick={removeFromCartBtnHandler}>-</Button>
      </div>
    </li>
  );
};

export default CartItem;
