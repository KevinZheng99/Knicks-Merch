import React from "react";
import Box from "@mui/material/Box";
import ImageCard from "./ImageCard";

const ImageCarousel = ({ images }) => {
  return (
    <Box>
      {images.map((image) => (
        <img src={image.imgSrc} alt={image.description} />
      ))}
    </Box>
  );
};

export default ImageCarousel;
