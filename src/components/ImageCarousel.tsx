import React from "react";
import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";

const ImageCarousel = ({ images, isOpen, selectedIndex }) => {
  return (
    <Carousel
      sx={{
        display: isOpen ? "block" : "none",
        position: "fixed",
        width: "30vw",
        height: "90vh",
        margin: "auto",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 101,
      }}
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      indicators={false}
      index={selectedIndex}
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
