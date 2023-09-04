import ProductListItem from "./ProductListItem";
import Product from "./product";

type ProductsListProps = {
  products: Product[];
};

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <section>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "20px" }}>
        {products.map((product, index) => {
          return <ProductListItem key={index} item={product} />;
        })}
      </ul>
    </section>
  );
};

export default ProductsList;