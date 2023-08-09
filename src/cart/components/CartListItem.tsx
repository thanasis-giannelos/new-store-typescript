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
  const { getGroupById, addToCart, removeFromCart } = useContext(CartContext);

  function addToCartBtnHandler() {
    addToCart(item);
  }

  function removeFromCartBtnHandler() {
    removeFromCart(item);
  }

  return (
    <li style={{ listStyle: "none", width: "100%" }}>
      <Card sx={{ display: "flex", alignItems: "center"}}>
        <Box sx={{width: "60%"}}>
          <CardMedia
            component="img"
            height="150"
            image={item.image}
            sx={{ objectFit: "contain" }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {item.title}
          </Typography>
          <Typography variant="body1" color="black">
            $ {item.price}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={addToCartBtnHandler}
          >
            +
          </Button>
          <Typography component="div" variant="subtitle1">
            x{getGroupById()[item.id].length}
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
