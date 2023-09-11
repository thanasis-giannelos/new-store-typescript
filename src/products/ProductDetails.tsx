import { Button, Container } from "@mui/material";
import { useParams } from "react-router";

const ProductDetails: React.FC = () => {
  const { id } = useParams();

  // useEffect((id: string) => {

  // }, []);

  const product = {
    "id": 56,
    "title": "Sneakers Joggers Shoes",
    "description": "Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New",
    "price": 40,
    "discountPercentage": 12.57,
    "rating": 4.38,
    "stock": 6,
    "brand": "Sneakers",
    "category": "mens-shoes",
    "thumbnail": "https://i.dummyjson.com/data/products/56/thumbnail.jpg",
    "images": [
      "https://i.dummyjson.com/data/products/56/1.jpg",
      "https://i.dummyjson.com/data/products/56/2.jpg",
      "https://i.dummyjson.com/data/products/56/3.jpg",
      "https://i.dummyjson.com/data/products/56/4.jpg",
      "https://i.dummyjson.com/data/products/56/5.jpg",
      "https://i.dummyjson.com/data/products/56/thumbnail.jpg"
    ]
  };

  return (
    <Container sx={{width: '70%', display: 'flex', gap: '1rem', marginTop: "5rem"}}>
      <div>
        <img
          src={product.thumbnail}
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
