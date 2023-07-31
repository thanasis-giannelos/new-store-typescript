import { useParams } from "react-router";

const ProductDetails: React.FC = () => {
  const { id } = useParams();

  return (
    <div>{id}</div>
    //fetch product
  )
}

export default ProductDetails;