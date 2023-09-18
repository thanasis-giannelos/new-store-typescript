import React from "react";
import useFetch from "../../hooks/useFetch";
import ProductsList from "../products/ProductsList";
import Product from "../products/product";

type ProductsResponse = {
  products: Product[];
  limit?: number;
  skip?: number;
  total?: number;
};

export const BestSellers: React.FC = () => {
  const initialState: ProductsResponse = {
    products: [],
    limit: undefined,
    total: undefined,
  };

  const { data, loading } = useFetch<ProductsResponse>(
    "https://dummyjson.com/products?limit=8&skip=20",
    initialState
  );
  const { products } = data;

  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          borderBottom: "5px solid #ffc107",
          paddingBottom: "2rem",
        }}
      >
        <h1>Best Sellers</h1>
      </div>
      <ProductsList products={products} />
    </div>
  );
};
