import React from "react";
import Box from "@mui/material/Box";

const ImageContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "12px",
        justifyContent: "center",
        marginBottom: "12px",
      }}
    >
      {children}
    </Box>
  );
};

export default ImageContainer;
