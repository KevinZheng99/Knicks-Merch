import React from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../../components/NavigationBar";

const Women = () => {
  return (
    <>
      <NavigationBar />
      <Box
        sx={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            backgroundImage: "url(HomePage.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            scrollSnapAlign: "start",
          }}
        />
        <Box
          sx={{
            height: "100vh",
            backgroundImage: "url(WomenTShirt.jpg)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scrollSnapAlign: "start",
          }}
        />
      </Box>
    </>
  );
};

export default Women;
