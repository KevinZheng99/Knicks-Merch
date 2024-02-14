import React from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../../components/NavigationBar";
import ImageContainer from "../../components/ImageContainer";
import ImageCard from "../../components/ImageCard";

const Men = () => {
  return (
    <>
      <NavigationBar />
      <ImageContainer>
        <ImageCard imgSrc="CarmeloClothing.jpg" title="Carmelo Kith Clothing" />
        <ImageCard
          imgSrc="CarmeloClothing2.jpg"
          title="Carmelo Kith Clothing 2"
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard imgSrc="AmariClothing2.jpg" title="Amari Kith Clothing 2" />
        <ImageCard imgSrc="AmariClothing.jpg" title="Amari Kith Clothing" />
      </ImageContainer>
      <ImageContainer>
        <ImageCard imgSrc="KithClothing.jpg" title="Kith Clothing" />
        <ImageCard imgSrc="KithClothing2.jpg" title="Kith Clothing 2" />
      </ImageContainer>
      <ImageContainer>
        <ImageCard imgSrc="BarretClothing.jpg" title="Barret Clothing" />
        <ImageCard imgSrc="BarretClothing2.jpg" title="Barret Clothing 2" />
      </ImageContainer>
      <ImageContainer>
        <ImageCard imgSrc="RandleClothing.jpg" title="Randle Clothing" />
        <ImageCard imgSrc="RandleClothing2.jpg" title="Randle Clothing 2" />
      </ImageContainer>
    </>
  );
};

export default Men;
