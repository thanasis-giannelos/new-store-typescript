import { Button, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { ref, child, get } from "firebase/database";
import { database } from "../firebase-config";


interface ProductCategoriesProps {
  selectCategory: (category: string) => void;
}

const ProductCategories: React.FC<ProductCategoriesProps> = ({
  selectCategory,
}) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `product_categories`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setCategories(snapshot.val());
      } else {
        console.log("No product categories available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <Container maxWidth="sm" sx={{ marginY: "20px" }}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        {categories.map((category, index) => (
          <Button key={index} onClick={() => selectCategory(category)}>
            {category}
          </Button>
        ))}
      </Stack>
    </Container>
  );
};

export default ProductCategories;