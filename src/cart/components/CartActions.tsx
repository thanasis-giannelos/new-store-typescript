import React, { useContext } from 'react';
import Button from '../../UI/Button/Button';
import { CartContext } from '../context/CartContext';
import classes from './Cart.module.css';

type CartActionsProps = {
  onOrder: (arg: boolean) => void;
};

const CartActions: React.FC<CartActionsProps> = ({ onOrder }) => {

  const {clearCart} = useContext(CartContext);

  const clickHandler = () => {
    onOrder(true);
    clearCart();
  };

  return (
    <div className={classes.actions}>
      <Button onClick={clickHandler}>Order</Button>
    </div>

  );
}

export default CartActions;