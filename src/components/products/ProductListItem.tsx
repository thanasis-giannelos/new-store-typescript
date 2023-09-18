import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
import Product from "./product";

type ProductListItemProps = {
  item: Product;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ item }) => {
  const { id, title, thumbnail, price, rating } = item;

  const { addToCart, removeFromCart } = useContext(CartContext);

  function addToCartBtnHandler() {
    addToCart(item);
  }

  return (
    <li style={{ listStyle: "none" }}>
      <Card>
        <CardActionArea component={Link} to={"/products/" + id}>
          <CardMedia
            component="img"
            height="250"
            image={thumbnail}
            sx={{ objectFit: "contain", paddingTop: '8px' }}
          />
          <CardContent sx={{ fontSize: "1rem" }}>
            <h5
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </h5>
            <h3>$ {price}</h3>
            <h5 style={{ display: "inline-block" }}>
              <StarBorderOutlinedIcon fontSize="inherit" />
              {rating}
            </h5>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "space-around", backgroundColor: 'rgb(255, 193, 7)', padding: '0' }}>
          <IconButton
            size="large"
            onClick={addToCartBtnHandler}
            sx={{backgroundColor: 'rgb(255, 193, 7)', color: '#6c757d'}}
          >
            <AddShoppingCartOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </li>
  );
};

export default ProductListItem;
