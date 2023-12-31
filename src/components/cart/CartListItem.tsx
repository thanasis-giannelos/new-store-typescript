import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import Product from "../products/product";
import { CartContext } from "./CartContext";

type CartItemsProps = {
  item: Product;
};

const CartItem: React.FC<CartItemsProps> = ({ item }) => {
  // const [productId] = Object.keys(item);
  // const [productProps] = Object.values(item);
  const { id, title, thumbnail, price } = item;
  const { getGroupById, increase, removeFromCart } = useContext(CartContext);

  function addToCartBtnHandler() {
    increase(item);
  }

  function removeFromCartBtnHandler() {
    removeFromCart(item);
  }

  return (
    <li style={{ listStyle: "none", width: "100%" }}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
          sx={{ objectFit: "contain", width: "25%" }}
        />

        <CardContent sx={{ width: "50%" }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="black">
            $ {price}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "space-around", width: "25%" }}>
          <Button
            sx={{ backgroundColor: "rgb(255, 193, 7)", color: "#6c757d" }}
            onClick={addToCartBtnHandler}
          >
            +
          </Button>
          <Typography component="span" variant="subtitle1">
            x{getGroupById()[id].length}
          </Typography>
          <Button
            sx={{ backgroundColor: "rgb(255, 193, 7)", color: "#6c757d" }}
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
