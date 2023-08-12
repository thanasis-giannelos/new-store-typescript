import { CATEGORIES, PRODUCTS } from "../data";
import ProductCategories from "./ProductCategories";
import ProductsList from "./ProductsList";
import useProducts from "./useProducts";

const Products: React.FC = () => {
  const { products, selectCategory } = useProducts();
  return (
    <>
      <ProductCategories categories={CATEGORIES} selectCategory={selectCategory}/>
      <ProductsList products={products} />;
    </>
  );
};

export default Products;
