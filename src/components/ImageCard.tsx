import React from "react";
import Box from "@mui/material/Box";

const ImageCard = ({ imgSrc, title, handleFocus }) => {
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
      onClick={handleFocus}
    />
  );
};

export default ImageCard;
