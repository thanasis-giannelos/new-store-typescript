import { Typography } from '@mui/material';

type CartSummaryProps = {
  totalPrice: number
};

const CartSummary: React.FC<CartSummaryProps> = ({ totalPrice }) => {
  return (
    <Typography component="div" variant='h6'>
      Total: ${totalPrice}
    </Typography>
  );
}

export default CartSummary;