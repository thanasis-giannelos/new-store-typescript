import React, { useContext, useState } from 'react';
import { CartContext } from "../context/CartContext";
import classes from './Cart.module.css';
import CartActions from './CartActions';
import CartList from './CartList';
import CartSummary from './CartSummary';

const Cart: React.FC = () => {

  const [orderSent, setOrderSent] = useState(false);

  const { getGroupById, getTotalAmount, getTotalCost} = useContext(CartContext);

  const obj = getGroupById();
  const cartItems = Object.keys(obj).map(id => obj[id][0]);

  return (
    <div className={classes.cart}>
      {!orderSent && getTotalAmount() !== 0 &&
        (<>
          <CartList cart={cartItems} />
          <CartSummary totalPrice={getTotalCost()} />
          <CartActions onOrder={setOrderSent} />
        </>)}
      {!orderSent && getTotalAmount() === 0 &&
        <h3 className={classes.empty}>Cart Empty</h3>
      }
      {orderSent && <h6>Order Sent Successfully</h6>}
    </div>
  )
}

export default Cart