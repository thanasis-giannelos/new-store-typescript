import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import Card from "../UI/Card";
import { CartContext } from "../cart/context/CartContext";
import classes from "./GalleryItem.module.css";
import Product from "./product";

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
    <Card>
      <li className={classes.galleryItem}>
        <Link to={`products/${item.category}/${item.id}`}>
          {/* <div className={classes.imgContainer}>
          <img src={img} alt={'gallery_item'}/>
        </div> */}
          <h3 className={classes.title}>{item.title}</h3>
          <p className={classes.description}>{item.description}</p>
        </Link>
        <p className={classes.price}>${item.price}</p>
        <div className={classes.actions}>
          <Button onClick={addToCartBtnHandler}>+</Button>
          <Button onClick={removeFromCartBtnHandler}>-</Button>
        </div>
      </li>
    </Card>
  );
};

export default ProductListItem;
