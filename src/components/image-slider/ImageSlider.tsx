import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import LensOutlinedIcon from "@mui/icons-material/LensOutlined";
import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import "./ImageSlider.css";
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
      <div className="banner">
        <h1>{current === 0 ? "Men Fashion" : "Woman Fashion"}</h1>
        <p>
          Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet
          amet amet ndiam elitr ipsum diam
        </p>
        <Button
          component={Link}
          to={`/categories/${current === 0 ? "mens-shirts" : "womens-dresses"}`}
          sx={{
            width: "50%",
            margin: "0 auto",
            backgroundColor: "#ffc107",
            color: "#6c757d",
          }}
        >
          Shop Now
        </Button>
      </div>
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
            size="small"
            key={index}
            edge="start"
            sx={index === current ? { color: "#ffc107" } : undefined}
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
