import React, { useState } from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";

const ImageSlider: React.FC = () => {
  const slides = [img1, img2];

  const [current, setCurrent] = useState(1);

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
        width: "100vw",
        height: "718px",
        position: "relative",
        backgroundImage: `url(${slides[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        style={{ position: "absolute", top: "50%" }}
        onClick={prevSlideHandler}
      >
        prev
      </button>
      <button
        style={{ position: "absolute", top: "50%", right: "0" }}
        onClick={nextSlideHandler}
      >
        next
      </button>
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
        <button>o</button>
        <button>o</button>
        <button>o</button>
      </div>
    </div>
  );
};

export default ImageSlider;
