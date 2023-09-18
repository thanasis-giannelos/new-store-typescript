import DoneAllIcon from "@mui/icons-material/DoneAll";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import React from "react";
import { BestSellers } from "../components/best-sellers/BestSellers";
import ImageSlider from "../components/image-slider/ImageSlider";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <ImageSlider />
      {/* BANNER  */}
      <div className="feature-container">
        <div className="feature">
          <SyncAltIcon fontSize="inherit" sx={{ color: "#ffc107" }} />
          <span>14-Day Return</span>
        </div>
        <div className="feature">
          <DoneAllIcon fontSize="inherit" sx={{ color: "#ffc107" }} />
          <span>Quality</span>
        </div>
        <div className="feature">
          <LocalShippingIcon fontSize="inherit" sx={{ color: "#ffc107" }} />
          <span>Free Shipping</span>
        </div>
        <div className="feature">
          <HeadsetMicIcon fontSize="inherit" sx={{ color: "#ffc107" }} />
          <span>24/7 Support</span>
        </div>
      </div>
      <BestSellers />
    </>
  );
};

export default Home;
