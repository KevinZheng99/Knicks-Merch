import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useRouter } from "next/router";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavigationBar = () => {
  const router = useRouter();

  const path = router.asPath;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        position: "fixed",
        alignItems: "center",
        justifyContent: "space-evenly",
        background: "white",
        padding: "12px 24px",
      }}
    >
      <Box sx={{ display: "flex", gap: "24px" }}>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
            borderBottom:
              path === "/" || path === "/women" ? "1px solid #000" : "",
          }}
          onClick={() => {
            router.push("/women");
          }}
        >
          Women
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
            borderBottom: path === "/men" ? "1px solid #000" : "",
          }}
          onClick={() => {
            router.push("/men");
          }}
        >
          Men
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
            borderBottom: path === "/kids" ? "1px solid #000" : "",
          }}
          onClick={() => {
            router.push("/kids");
          }}
        >
          Kids
        </Typography>
      </Box>
      <Box
        component="img"
        sx={{ cursor: "pointer" }}
        src="/New_York_Knicks_logo.png"
        width={62}
        height={50}
        alt="Logo"
        onClick={() => {
          router.push("/women");
        }}
      />
      <Box sx={{ display: "flex", gap: "24px" }}>
        <FavoriteBorderIcon
          sx={{
            color: "#f58426",
            cursor: "pointer",
            textShadow: "0 1px 1px #0009",
          }}
        />
        <ShoppingCartOutlinedIcon
          sx={{
            color: "#f58426",
            cursor: "pointer",
            textShadow: "0 1px 1px #0009",
          }}
        />
      </Box>
    </Box>
  );
};

export default NavigationBar;
