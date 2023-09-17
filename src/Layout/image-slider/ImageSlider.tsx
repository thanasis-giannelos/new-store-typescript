import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import LensOutlinedIcon from "@mui/icons-material/LensOutlined";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
const ImageSlider: React.FC = () => {
  const slides = [img1, img2];

  const [current, setCurrent] = useState(0);

  function prevSlideHandler() {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? slides.length - 1 : prevCurrent - 1
    );
  }

  function nextSlideHandler() {
    setCurrent((prevCurrent) =>
      prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1
    );
  }

  return (
    <div
      style={{
        // width: "100vw",
        height: "718px",
        position: "relative",
        backgroundImage: `url(${slides[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={prevSlideHandler}
        sx={{ position: "absolute", top: "50%", left: "5%" }}
      >
        <ArrowBackIosNewOutlinedIcon />
      </IconButton>

      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={nextSlideHandler}
        sx={{ position: "absolute", top: "50%", right: "5%" }}
      >
        <ArrowForwardIosOutlinedIcon />
      </IconButton>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "3%",
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: `translate(-50%, 0px)`,
        }}
      >
        {slides.map((_, index) => (
          <IconButton
            key={index}
            size="small"
            edge="start"
            color={index === current ? "error" : "inherit"}
            onClick={() => setCurrent(index)}
          >
            <LensOutlinedIcon />
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
