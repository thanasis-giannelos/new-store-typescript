import StarIcon from "@mui/icons-material/Star";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../cart/context/CartContext";
import Product from "./product";
import { Link } from "react-router-dom";

type ProductListItemProps = {
  item: Product;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  function addToCartBtnHandler() {
    addToCart(item);
  }

  function removeFromCartBtnHandler() {
    removeFromCart(item);
  }

  return (
    <li style={{ listStyle: "none", width: 200, flex: "1 1 0" }}>
      <Card>
        <CardActionArea component={Link} to={'/' + item.id}>
          <CardMedia
            component="img"
            height="150"
            image={item.image}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" noWrap>
              {item.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              $ {item.price}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {/* <IconButton
                edge="start"
                color="inherit"
                sx={{ fontSize: 12}}
              >
              </IconButton> */}

              <span>
                <StarIcon sx={{ height: 0.8 }} /> {item.rating.rate}/5 (
                {item.rating.count})
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{justifyContent: "space-around"}}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={addToCartBtnHandler}
            >
              +
            </Button>
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

export default ProductListItem;