import React, { useState } from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../../components/NavigationBar";
import ImageContainer from "../../components/ImageContainer";
import ImageCard from "../../components/ImageCard";
import ImageCarousel from "../../components/ImageCarousel";
import { kidsImages } from "../../consts";

const Kids = () => {
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
          imgSrc="KnicksKidClothing.jpg"
          title="Carmelo Kith Clothing"
          handleFocus={handleFocus}
          index={0}
        />
        <ImageCard
          imgSrc="KnicksKidClothing3.jpg"
          title="Carmelo Kith Clothing 3"
          handleFocus={handleFocus}
          index={1}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="KnicksKidClothing4.jpg"
          title="Carmelo Kith Clothing 4"
          handleFocus={handleFocus}
          index={2}
        />
        <ImageCard
          imgSrc="KnicksKidClothing5.jpg"
          title="Carmelo Kith Clothing 5"
          handleFocus={handleFocus}
          index={3}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="KnicksKidClothing6.jpg"
          title="Carmelo Kith Clothing 6"
          handleFocus={handleFocus}
          index={4}
        />
        <ImageCard
          imgSrc="KnicksKidClothing7.jpg"
          title="Carmelo Kith Clothing 7"
          handleFocus={handleFocus}
          index={5}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="KnicksKidClothing8.jpg"
          title="Carmelo Kith Clothing 8"
          handleFocus={handleFocus}
          index={6}
        />
        <ImageCard
          imgSrc="KnicksKidClothing9.jpg"
          title="Carmelo Kith Clothing 9"
          handleFocus={handleFocus}
          index={7}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="KnicksKidClothing10.jpg"
          title="Carmelo Kith Clothing 10"
          handleFocus={handleFocus}
          index={8}
        />
        <ImageCard
          imgSrc="KnicksKidClothing11.jpg"
          title="Carmelo Kith Clothing 11"
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
        images={kidsImages}
        isOpen={open}
        selectedIndex={selectedIndex}
      />
    </>
  );
};

export default Kids;
