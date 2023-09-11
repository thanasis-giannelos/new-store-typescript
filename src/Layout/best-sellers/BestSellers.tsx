import React, { useState } from "react";
import ProductsList from '../../products/ProductsList';

export const BestSellers: React.FC = () => {
  const [products, setProducts] = useState();
  
  return (
    <div style={{ backgroundColor: "white", width: '80%', margin: '0 auto', padding: '1rem' }}>
      <div style={{textAlign: 'center'}}>
        <h1>Best Sellers</h1>
      </div>
      <ProductsList products={products}/>
    </div>
  );
};
