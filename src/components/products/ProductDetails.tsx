import { Button, Container } from "@mui/material";
import { useContext } from "react";
import { Blocks } from "react-loader-spinner";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { CartContext } from "../cart/CartContext";
import ImageGallery from "../image-gallery/ImageGallery";
import "./ProductDetails.css";
import Product from "./product";

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
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          <Blocks />
        </div>
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
