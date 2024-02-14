import React from "react";
import Box from "@mui/material/Box";

const ImageCard = ({ imgSrc, title }) => {
  return (
    <Box
      component="img"
      loading="lazy"
      sx={{
        width: "48.5%",
        height: "auto",
        display: "inline-block",
        objectFit: "cover",
      }}
      src={imgSrc}
      alt={title}
    />
  );
};

export default ImageCard;
