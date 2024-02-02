import React from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../../components/NavigationBar";

const Women = () => {
  return (
    <>
      <NavigationBar />
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: "url(HomePage.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </>
  );
};

export default Women;
