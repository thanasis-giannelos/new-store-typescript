import { Box, Container, Tab, Tabs } from "@mui/material";

interface ProductCategoriesProps {
  categories: string[];
  selectCategory: (category: string) => void;
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({
  categories,
  selectCategory,
}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={null}
        onChange={() => selectCategory(`${value}`)}
        textColor="secondary"
        indicatorColor="secondary"
      >
        {categories.map((category) => (
          <Tab value={category} label={category} />
        ))}
      </Tabs>
    </Box>
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
