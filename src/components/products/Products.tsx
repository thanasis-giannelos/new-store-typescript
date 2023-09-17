import { Blocks } from "react-loader-spinner";
import ProductsList from "./ProductsList";
import { useParams } from "react-router";
import Product from "./product";
import useFetch from "../../hooks/useFetch";

type ProductsResponse = {
  products: Product[];
  limit?: number;
  skip?: number;
  total?: number;
};

const Products: React.FC = () => {
  const { category } = useParams();

  const initialState: ProductsResponse = {
    products: [],
    limit: undefined,
    total: undefined,
  };

  const { data, loading } = useFetch<ProductsResponse>(
    `https://dummyjson.com/products/category/${category}`,
    initialState
  );
  const { products } = data;

  return (
    <>
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
        <ProductsList products={products} />
      )}
    </>
  );
};

export default Products;
