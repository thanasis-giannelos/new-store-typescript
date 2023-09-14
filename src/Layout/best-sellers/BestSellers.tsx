import React, { useState } from "react";
import ProductsList from "../../products/ProductsList";

export const BestSellers: React.FC = () => {
  const [products, setProducts] = useState([
    {
      id: 66,
      title: "Steel Analog Couple Watches",
      description: "Elegant design, Stylish ,Unique & Trendy,Comfortable wear",
      price: 35,
      discountPercentage: 3.23,
      rating: 4.79,
      stock: 24,
      brand: "Eastern Watches",
      category: "womens-watches",
      thumbnail: "https://i.dummyjson.com/data/products/66/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/66/1.jpg",
        "https://i.dummyjson.com/data/products/66/2.jpg",
        "https://i.dummyjson.com/data/products/66/3.jpg",
        "https://i.dummyjson.com/data/products/66/4.JPG",
        "https://i.dummyjson.com/data/products/66/thumbnail.jpg",
      ],
    },
    {
      id: 67,
      title: "Fashion Magnetic Wrist Watch",
      description:
        "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable",
      price: 60,
      discountPercentage: 16.69,
      rating: 4.03,
      stock: 46,
      brand: "Eastern Watches",
      category: "womens-watches",
      thumbnail: "https://i.dummyjson.com/data/products/67/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/67/1.jpg",
        "https://i.dummyjson.com/data/products/67/2.jpg",
        "https://i.dummyjson.com/data/products/67/3.jpg",
        "https://i.dummyjson.com/data/products/67/4.jpg",
        "https://i.dummyjson.com/data/products/67/thumbnail.jpg",
      ],
    },
    {
      id: 68,
      title: "Stylish Luxury Digital Watch",
      description:
        "Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls",
      price: 57,
      discountPercentage: 9.03,
      rating: 4.55,
      stock: 77,
      brand: "Luxury Digital",
      category: "womens-watches",
      thumbnail: "https://i.dummyjson.com/data/products/68/thumbnail.webp",
      images: [
        "https://i.dummyjson.com/data/products/68/1.jpg",
        "https://i.dummyjson.com/data/products/68/2.jpg",
      ],
    },
    {
      id: 69,
      title: "Golden Watch Pearls Bracelet Watch",
      description:
        "Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women",
      price: 47,
      discountPercentage: 17.55,
      rating: 4.77,
      stock: 89,
      brand: "Watch Pearls",
      category: "womens-watches",
      thumbnail: "https://i.dummyjson.com/data/products/69/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/69/1.jpg",
        "https://i.dummyjson.com/data/products/69/2.jpg",
        "https://i.dummyjson.com/data/products/69/3.webp",
        "https://i.dummyjson.com/data/products/69/4.jpg",
        "https://i.dummyjson.com/data/products/69/thumbnail.jpg",
      ],
    },
    {
      id: 70,
      title: "Stainless Steel Women",
      description:
        "Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies",
      price: 35,
      discountPercentage: 8.98,
      rating: 4.08,
      stock: 111,
      brand: "Bracelet",
      category: "womens-watches",
      thumbnail: "https://i.dummyjson.com/data/products/70/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/70/1.jpg",
        "https://i.dummyjson.com/data/products/70/2.jpg",
        "https://i.dummyjson.com/data/products/70/thumbnail.jpg",
      ],
    },
    {
      id: 71,
      title: "Women Shoulder Bags",
      description:
        "LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies",
      price: 46,
      discountPercentage: 14.65,
      rating: 4.71,
      stock: 17,
      brand: "LouisWill",
      category: "womens-bags",
      thumbnail: "https://i.dummyjson.com/data/products/71/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/71/1.jpg",
        "https://i.dummyjson.com/data/products/71/2.jpg",
        "https://i.dummyjson.com/data/products/71/3.webp",
        "https://i.dummyjson.com/data/products/71/thumbnail.jpg",
      ],
    },
    {
      id: 72,
      title: "Handbag For Girls",
      description:
        "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.",
      price: 23,
      discountPercentage: 17.5,
      rating: 4.91,
      stock: 27,
      brand: "LouisWill",
      category: "womens-bags",
      thumbnail: "https://i.dummyjson.com/data/products/72/thumbnail.webp",
      images: [
        "https://i.dummyjson.com/data/products/72/1.jpg",
        "https://i.dummyjson.com/data/products/72/2.png",
        "https://i.dummyjson.com/data/products/72/3.webp",
        "https://i.dummyjson.com/data/products/72/4.jpg",
        "https://i.dummyjson.com/data/products/72/thumbnail.webp",
      ],
    },
    {
      id: 73,
      title: "Fancy hand clutch",
      description:
        "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.",
      price: 44,
      discountPercentage: 10.39,
      rating: 4.18,
      stock: 101,
      brand: "Bracelet",
      category: "womens-bags",
      thumbnail: "https://i.dummyjson.com/data/products/73/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/73/1.jpg",
        "https://i.dummyjson.com/data/products/73/2.webp",
        "https://i.dummyjson.com/data/products/73/3.jpg",
        "https://i.dummyjson.com/data/products/73/thumbnail.jpg",
      ],
    },
  ]);

  return (
    <div
      style={{
        // backgroundColor: "red",
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
