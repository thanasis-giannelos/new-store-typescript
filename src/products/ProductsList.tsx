import classes from "./Gallery.module.css";
import ProductListItem from './ProductListItem';
import Product from "./product";

type ProductsListProps = {
  products: Product[]
};

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {

  return (
      <section className={classes.gallery}>
        <ul>
          {products.map(product => <ProductListItem key={product.id} item={product} />)}
        </ul>
      </section>
  )
};

export default ProductsList;