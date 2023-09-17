import ProductListItem from "./ProductListItem";
import Product from "./product";

type ProductsListProps = {
  products: Product[];
};

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <section>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 20rem)",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "3rem",
        }}
      >
        {products.map((product, index) => {
          return <ProductListItem key={index} item={product} />;
        })}
      </ul>
    </section>
  );
};

export default ProductsList;
