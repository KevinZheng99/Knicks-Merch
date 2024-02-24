import React, { useState } from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../../components/NavigationBar";
import ImageContainer from "../../components/ImageContainer";
import ImageCard from "../../components/ImageCard";
import ImageCarousel from "../../components/ImageCarousel";
import { menImages } from "../../consts";

export default function Men() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleFocus = (index) => {
    setOpen(!open);
    setSelectedIndex(index);
  };

  return (
    <>
      <NavigationBar />
      <ImageContainer>
        <ImageCard
          imgSrc="CarmeloClothing.jpg"
          title="Carmelo Kith Clothing"
          handleFocus={handleFocus}
          index={0}
        />
        <ImageCard
          imgSrc="CarmeloClothing2.jpg"
          title="Carmelo Kith Clothing 2"
          handleFocus={handleFocus}
          index={1}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="AmariClothing2.jpg"
          title="Amari Kith Clothing 2"
          handleFocus={handleFocus}
          index={2}
        />
        <ImageCard
          imgSrc="AmariClothing.jpg"
          title="Amari Kith Clothing"
          handleFocus={handleFocus}
          index={3}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="KithClothing.jpg"
          title="Kith Clothing"
          handleFocus={handleFocus}
          index={4}
        />
        <ImageCard
          imgSrc="KithClothing2.jpg"
          title="Kith Clothing 2"
          handleFocus={handleFocus}
          index={5}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="BarretClothing.jpg"
          title="Barret Clothing"
          handleFocus={handleFocus}
          index={6}
        />
        <ImageCard
          imgSrc="BarretClothing2.jpg"
          title="Barret Clothing 2"
          handleFocus={handleFocus}
          index={7}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="RandleClothing.jpg"
          title="Randle Clothing"
          handleFocus={handleFocus}
          index={8}
        />
        <ImageCard
          imgSrc="RandleClothing2.jpg"
          title="Randle Clothing 2"
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
        images={menImages}
        isOpen={open}
        selectedIndex={selectedIndex}
      />
    </>
  );
}
