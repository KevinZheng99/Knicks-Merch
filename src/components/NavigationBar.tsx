import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavigationBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        position: "fixed",
        alignItems: "space-evenly",
        justifyContent: "space-evenly",
        padding: "24px",
      }}
    >
      <Image
        src="/New_York_Knicks_logo.png"
        width={62}
        height={50}
        alt="Logo"
        loading="lazy"
      />
      <Box sx={{ display: "flex", gap: "64px" }}>
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          Women
        </Typography>
        <Typography sx={{ color: "white", fontWeight: "bold" }}>Men</Typography>
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          Kids
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "24px" }}>
        <FavoriteBorderIcon sx={{ color: "white" }} />
        <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
      </Box>
    </Box>
  );
};

export default NavigationBar;
