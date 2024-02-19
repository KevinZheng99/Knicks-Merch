import React from "react";
import Box from "@mui/material/Box";

const ImageCard = ({ imgSrc, title, handleFocus, index }) => {
  return (
    <Box
      component="img"
      loading="lazy"
      sx={{
        width: "48.5%",
        height: "auto",
        display: "inline-block",
        objectFit: "cover",
        cursor: "zoom-in",
      }}
      src={imgSrc}
      alt={title}
      onClick={() => handleFocus(index)}
    />
  );
};

export default ImageCard;
