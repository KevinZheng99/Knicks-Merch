import React from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../../components/NavigationBar";

const Men = () => {
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
            backgroundImage: "url(MenKithJacket.jpg)",
            backgroundRepeat: "no-repeat",
            scrollSnapAlign: "start",
          }}
        />
      </Box>
    </>
  );
};

export default Men;
