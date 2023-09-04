import { useState, useEffect } from "react";
import Product from "./product";
import { ref, child, get } from "firebase/database";
import { database } from "../firebase-config";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `products`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducts(snapshot.val());
        } else {
          console.log("No products available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return {
    products,
    // selectCategory: (category: string) => {
    //   const fromMap = products.map((prod) => {
    //     const [product] = Object.values(prod);
    //     return product;
    //   });
    //   console.log(fromMap)
    //   const fromFilter = fromMap.filter((prod) => {
    //     return category === "all_categories"
    //       ? prod.category !== ""
    //       : prod.category === category;
    //   });
    //   console.log(fromFilter)
    //   setProducts(fromFilter);
    // },
  };
};

export default useProducts;
