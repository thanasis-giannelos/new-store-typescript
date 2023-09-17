import React from "react";
import PhotoBanner from "../components/PhotoBanner";
import { BestSellers } from "../components/best-sellers/BestSellers";
import ImageSlider from "../components/image-slider/ImageSlider";

const Home: React.FC = () => {
  return (
    <>
      <ImageSlider />
      <PhotoBanner />
      <BestSellers />
    </>
  );
};

export default Home;
