import classes from "../Layout/Header.module.css";

interface ProductCategoriesProps {
  categories: string[];
  selectCategory: (category: string) => void;
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({categories, selectCategory}) => {
  return (
    <ul className={classes.categories}>
    <li>
      <a href="#" onClick={() => selectCategory("all_categories")}>
        all
      </a>
    </li>
    {categories.map((category) => (
      <li key={category}>
        <a href="#" onClick={() => selectCategory(`${category}`)}>
          {category}
        </a>
      </li>
    ))}
  </ul>
  );
};

export default ProductCategories;