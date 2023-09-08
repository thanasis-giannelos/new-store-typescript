import { child, get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../firebase-config";
import Product from "./product";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `products`))
      .then((snapshot) => {
        setLoading(false)
        if (snapshot.exists()) {
          setProducts(snapshot.val());
        } else {
          console.log("No products available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
      return () => {
        console.log('clean')
      };
  }, []);

  return {
    loading,
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
