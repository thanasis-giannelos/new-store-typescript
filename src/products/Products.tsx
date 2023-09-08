import { Blocks } from "react-loader-spinner";
import ProductsList from "./ProductsList";
import useProducts from "./useProducts";

const Products: React.FC = () => {
  // const { products, selectCategory } = useProducts();
  const { products, loading } = useProducts();
  return (
    <>
      {/* <ProductCategories selectCategory={selectCategory}/> */}
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
