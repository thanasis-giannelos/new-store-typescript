import React, { useRef, useState } from "react";
import ProductsList from "../../products/ProductsList";
import useFetch from "../../hooks/useFetch";
import Product from "../../products/product";

type ProductsResponse = {
  products: Product[];
  limit?: number;
  skip?: number;
  total?: number;
};

export const BestSellers: React.FC = () => {
  const dataBeenFetchedRef = useRef(false);

  const initialState: ProductsResponse = {
    products: [],
    limit: undefined,
    total: undefined,
  };

  const { data, loading, dataBeenFetched } = useFetch<ProductsResponse>(
    "https://dummyjson.com/products?limit=10&skip=10",
    initialState,
    dataBeenFetchedRef.current
  );
  const { products } = data;
  dataBeenFetchedRef.current = dataBeenFetched;

  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Best Sellers</h1>
      </div>
      <ProductsList products={products} />
    </div>
  );
};
