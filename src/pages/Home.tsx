import React from "react";
import { BestSellers } from "../Layout/best-sellers/BestSellers";
import ImageSlider from "../Layout/image-slider/ImageSlider";
import PhotoBanner from "../Layout/photobanner/PhotoBanner";

const Home: React.FC = () => {
  return (
    <>
      <ImageSlider/>
      <PhotoBanner/>
      <BestSellers/>
    </>
  );
};

export default Home;
