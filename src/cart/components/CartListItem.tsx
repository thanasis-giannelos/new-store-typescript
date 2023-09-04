import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import Product from "../../products/product";
import { CartContext } from "../context/CartContext";

type CartItemsProps = {
  item: Product;
};

const CartItem: React.FC<CartItemsProps> = ({ item }) => {
  const [productId] = Object.keys(item);
  const [productProps] = Object.values(item);
  const { getGroupById, addToCart, removeFromCart } = useContext(CartContext);

  function addToCartBtnHandler() {
    addToCart(item);
  }

  function removeFromCartBtnHandler() {
    removeFromCart(item);
  }

  return (
    <li style={{ listStyle: "none", width: "100%" }}>
      <Card sx={{ display: "flex",  }}>
        <CardMedia
          component="img"
          height="140"
          image={productProps.image}
          sx={{ objectFit: "contain", width: '25%' }}
        />

        <CardContent sx={{width: '50%'}}>
          <Typography gutterBottom variant="h6" component="div">
            {productProps.title}
          </Typography>
          <Typography variant="body1" color="black">
            $ {productProps.price}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "space-around", width: '25%' }}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={addToCartBtnHandler}
          >
            +
          </Button>
          <Typography component="div" variant="subtitle1">
            x{getGroupById()[productId].length}
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={removeFromCartBtnHandler}
          >
            -
          </Button>
        </CardActions>
      </Card>
    </li>
  );
};

export default CartItem;
