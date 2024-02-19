import React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";

const ImageCarousel = ({ images, isOpen }) => {
  return (
    <Carousel
      sx={{
        display: isOpen ? "block" : "none",
        width: "30vw",
        margin: "auto",
      }}
      autoPlay={false}
    >
      {images.map((image, i) => (
        <Box
          key={i}
          component="img"
          sx={{
            width: "30vw",
            height: "90vh",
            display: "inline-block",
            objectFit: "cover",
          }}
          src={image.imgSrc}
          alt={image.description}
        />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
