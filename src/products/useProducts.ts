import { useState, useEffect } from "react";
import Product from "./product";
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from "../firebase-config";


const useProducts = () => {

  // const [products, setProducts] = useState(PRODUCTS);
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const dbRef = ref(database);
  //   console.log(dbRef)
  //   get(child(dbRef, `products`)).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // },[]);

  return {
    products,
    selectCategory: (category: string) => {
      setProducts(products.filter(prod => category === 'all_categories' ? prod.category !== "" : prod.category === category))
    }
  };
}

export default useProducts;