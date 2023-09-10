import React from "react";
import ImageSlider from "../Layout/image-slider/ImageSlider";
import Categories from "../Layout/Categories";
import PhotoBanner from "../Layout/photobanner/PhotoBanner";
import TopSales from "../Layout/top-sales/TopSales";

const Home: React.FC = () => {
  return (
    <>
      <ImageSlider/>
      <PhotoBanner/>
      <TopSales/>
    </>
  );
};

export default Home;
