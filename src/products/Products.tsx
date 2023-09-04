import ProductCategories from "./ProductCategories";
import ProductsList from "./ProductsList";
import useProducts from "./useProducts";

const Products: React.FC = () => {
  // const { products, selectCategory } = useProducts();
  const { products } = useProducts();
  return (
    <>
      {/* <ProductCategories selectCategory={selectCategory}/> */}
      <ProductsList products={products} />;
    </>
  );
};

export default Products;
