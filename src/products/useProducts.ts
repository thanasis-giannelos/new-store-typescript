import { useState } from "react";
import Product from "./product";

const useProducts = (PRODUCTS: Product[]) => {

  const [products, setProducts] = useState(PRODUCTS);

  return {
    products,
    selectCategory: (category: string) => {
      setProducts(PRODUCTS.filter(prod => category === 'all_categories' ? prod.category !== "" : prod.category === category))
    }
  };
}

export default useProducts;