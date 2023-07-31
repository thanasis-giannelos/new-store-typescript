import React from 'react';
import Product from '../../products/product';
import classes from './CartItem.module.css';
import CartListItem from "./CartListItem";

type CartListProps = {
  cart: Product[]
};

const CartList: React.FC<CartListProps> = ({ cart }) => {

  return (
      <section className={classes.gallery}>
        <ul>
          {cart.map(item => <CartListItem key={item.id} item={item} />)}
        </ul>
      </section>
  )
};

export default CartList;