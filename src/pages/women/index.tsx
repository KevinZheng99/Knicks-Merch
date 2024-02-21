import React, { useState } from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../../components/NavigationBar";
import ImageContainer from "../../components/ImageContainer";
import ImageCard from "../../components/ImageCard";
import ImageCarousel from "../../components/ImageCarousel";

import { womenImages } from "../../consts";
import { Typography } from "@mui/material";

const Women = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleFocus = (index) => {
    setOpen(!open);
    setSelectedIndex(index);
  };

  return (
    <>
      <NavigationBar />
      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Women Image Gallery
      </Typography>
      <Typography
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          cursor: "pointer",
          marginBottom: "12px",
        }}
      >
        Shop Now
      </Typography>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksClothing.jpg"
          title="Women Knicks Clothing"
          handleFocus={handleFocus}
          index={0}
        />
        <ImageCard
          imgSrc="WomenKnicksClothing2.jpg"
          title="Women Knicks Clothing 2"
          handleFocus={handleFocus}
          index={1}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksClothing4.jpg"
          title="Women Knicks Clothing 4"
          handleFocus={handleFocus}
          index={2}
        />
        <ImageCard
          imgSrc="WomenKnicksClothing5.jpg"
          title="Women Knicks Clothing 5"
          handleFocus={handleFocus}
          index={3}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksSweater.jpg"
          title="Women Knicks Sweater"
          handleFocus={handleFocus}
          index={4}
        />
        <ImageCard
          imgSrc="WomenKnicksSweater2.jpg"
          title="Women Knicks Sweater 2"
          handleFocus={handleFocus}
          index={5}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksJersey.jpg"
          title="Women Knicks Jersey"
          handleFocus={handleFocus}
          index={6}
        />
        <ImageCard
          imgSrc="WomenKnicksJersey2.jpg"
          title="Women Knicks Jersey 2"
          handleFocus={handleFocus}
          index={7}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksClothing6.jpg"
          title="Women Knicks Clothing 6"
          handleFocus={handleFocus}
          index={8}
        />
        <ImageCard
          imgSrc="WomenKnicksClothing7.jpg"
          title="Women Knicks Clothing 7"
          handleFocus={handleFocus}
          index={9}
        />
      </ImageContainer>
      <Box
        sx={{
          display: open ? "block" : "none",
          position: "fixed",
          backgroundColor: "black",
          width: "100%",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          opacity: 0.5,
        }}
        onClick={() => setOpen(!open)}
      />
      <ImageCarousel
        images={womenImages}
        isOpen={open}
        selectedIndex={selectedIndex}
      />
    </>
  );
};

export default Women;
