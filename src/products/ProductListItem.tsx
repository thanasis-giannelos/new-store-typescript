import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
import Product from "./product";

type ProductListItemProps = {
  item: Product;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ item }) => {
  // const [productId] = Object.keys(item);
  // const [productProps] = Object.values(item);
  const {id, title, thumbnail, price, rating} = item;

  const { addToCart, removeFromCart } = useContext(CartContext);

  function addToCartBtnHandler() {
    addToCart(item);
  }

  // function removeFromCartBtnHandler() {
  //   removeFromCart(item);
  // }

  return (
    <li style={{ listStyle: "none", width: 200, flex: "1 1 0" }}>
      <Card>
        <CardActionArea component={Link} to={"/" + id}>
          <CardMedia
            component="img"
            height="250"
            image={thumbnail}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" noWrap>
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              $ {price}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              <span>
                <StarBorderOutlinedIcon sx={{ height: 0.8 }} /> {rating}
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "space-around" }}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            onClick={addToCartBtnHandler}
          >
            <AddShoppingCartOutlinedIcon/>
          </IconButton>
        </CardActions>
      </Card>
    </li>
  );
};

export default ProductListItem;
