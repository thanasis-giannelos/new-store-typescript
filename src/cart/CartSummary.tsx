import { Typography } from '@mui/material';

type CartSummaryProps = {
  totalPrice: number
};

const CartSummary: React.FC<CartSummaryProps> = ({ totalPrice }) => {
  return (
    <Typography component="div" variant='body1'>
      Total: $ {totalPrice.toFixed(2)}
    </Typography>
  );
}

export default CartSummary;