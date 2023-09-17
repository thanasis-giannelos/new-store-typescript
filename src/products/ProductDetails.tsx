import { Button, Container } from "@mui/material";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Product from "./product";
import "./ProductDetails.css";
import ImageGallery from "../Layout/image-slider/ImageGallery";
import { useContext } from "react";
import { CartContext } from "../cart/CartContext";
import { Audio } from "react-loader-spinner";

const ProductDetails: React.FC = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const initialState = {} as Product;
  const { data: product, loading } = useFetch<Product>(
    `https://dummyjson.com/products/${id}`,
    initialState
  );

  return (
    <Container>
      {loading ? (
        <Audio />
      ) : (
        <div className="container">
          <ImageGallery images={product.images} />
          <div className="product-details">
            <div className="product-categ-title">
              {/* <span>special sneaker</span> */}
              <h3>{product.title}</h3>
            </div>
            <p>{product.description}</p>
            <h3>$ {product.price}</h3>
            <div className="actions">
              {/* <div className="amount">
                <Button onClick={() => removeFromCart(product)}>-</Button>
                <span>{getAmountOfProduct(product)}</span>
                <Button onClick={() => addToCart(product)}>+</Button>
              </div> */}
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ProductDetails;
