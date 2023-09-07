import { Button, Container } from "@mui/material";
import { useParams } from "react-router";
import Product from "./product";

const ProductDetails: React.FC = () => {
  const { id } = useParams();

  // useEffect((id: string) => {

  // }, []);

  const product_: Product = {
    hhe34fg4: {
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  };

  const product = product_["hhe34fg4"];

  return (
    <Container sx={{width: '70%', display: 'flex', gap: '1rem', marginTop: "5rem"}}>
      <div>
        <img
          src={product.image}
          height="300px"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h4>$ {product.price}</h4>
      </div>
      <div style={{width: '300px', alignSelf: 'center'}}>
        <Button variant="contained">Add to Cart</Button>
      </div>
    </Container>
  );
};

export default ProductDetails;
