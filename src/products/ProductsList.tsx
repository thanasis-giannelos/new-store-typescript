import ProductListItem from "./ProductListItem";
import Product from "./product";

type ProductsListProps = {
  products: Product[];
};

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <section>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map((prod) => {
          const [id] = Object.keys(prod);
          const [item] = Object.values(prod);
          return <ProductListItem key={id} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default ProductsList;