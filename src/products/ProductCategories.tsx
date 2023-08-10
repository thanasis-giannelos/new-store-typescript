import { Button, Container, Stack } from "@mui/material";

interface ProductCategoriesProps {
  categories: string[];
  selectCategory: (category: string) => void;
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({
  categories,
  selectCategory,
}) => {
  return (
    <Container maxWidth="sm" sx={{marginY: '20px'}}>
      <Stack direction="row" sx={{justifyContent: 'space-between'}}>
        {categories.map((category) => (
          <Button onClick={() => selectCategory(category)}>{category}</Button>
        ))}
      </Stack>
    </Container>
  );
};

export default ProductCategories;