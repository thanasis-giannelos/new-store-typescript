import classes from './Cart.module.css';

type CartSummaryProps = {
  totalPrice: number
};

const CartSummary: React.FC<CartSummaryProps> = ({ totalPrice }) => {
  return (
    <div className={classes.total}>
      <span>Total: </span>
      <span>${totalPrice}</span>
    </div>

  );
}

export default CartSummary;