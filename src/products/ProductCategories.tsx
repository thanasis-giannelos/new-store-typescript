import { Container, Tab, Tabs } from "@mui/material";

interface ProductCategoriesProps {
  categories: string[];
  selectCategory: (category: string) => void;
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({
  categories,
  selectCategory,
}) => {
  return (
    <Container sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        onChange={() => selectCategory("all_categories")}
        aria-label="basic tabs example"
      >
        {categories.map((category) => (
          <Tab label={category} />
        ))}
      </Tabs>
    </Container>
  );

  // return (
  //   <ul className={classes.categories}>
  //   <li>
  //     <a href="#" onClick={() => selectCategory("all_categories")}>
  //       all
  //     </a>
  //   </li>
  //   {categories.map((category) => (
  //     <li key={category}>
  //       <a href="#" onClick={() => selectCategory(`${category}`)}>
  //         {category}
  //       </a>
  //     </li>
  //   ))}
  // </ul>
  // );
};

export default ProductCategories;
