import { Button } from "@mui/material";
import img from "./yubjh.jpg";

const PhotoBanner = () => {
  return (
    <div
      style={{
        width: "80%",
        maxWidth: '1370px',
        height: "111px",
        margin: "3rem auto",
        backgroundColor: "red",
        backgroundImage: `url(${img})`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '30rem'
        }}
      >
        <div>
          <h1>Save Time, Buy Now!</h1>
        </div>
        <div>
          <Button>Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default PhotoBanner;
