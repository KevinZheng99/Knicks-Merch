import React from "react";
import NavigationBar from "../../components/NavigationBar";
import ImageContainer from "../../components/ImageContainer";
import ImageCard from "../../components/ImageCard";

const Kids = () => {
  return (
    <>
      <NavigationBar />
      <ImageContainer>
        <ImageCard
          imgSrc="KnicksKidClothing.jpg"
          title="Carmelo Kith Clothing"
        />
        <ImageCard
          imgSrc="KnicksKidClothing3.jpg"
          title="Carmelo Kith Clothing 3"
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="KnicksKidClothing4.jpg"
          title="Carmelo Kith Clothing 4"
        />
        <ImageCard
          imgSrc="KnicksKidClothing5.jpg"
          title="Carmelo Kith Clothing 5"
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="KnicksKidClothing6.jpg"
          title="Carmelo Kith Clothing 6"
        />
        <ImageCard
          imgSrc="KnicksKidClothing7.jpg"
          title="Carmelo Kith Clothing 7"
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="KnicksKidClothing8.jpg"
          title="Carmelo Kith Clothing 8"
        />
        <ImageCard
          imgSrc="KnicksKidClothing9.jpg"
          title="Carmelo Kith Clothing 9"
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="KnicksKidClothing10.jpg"
          title="Carmelo Kith Clothing 10"
        />
        <ImageCard
          imgSrc="KnicksKidClothing11.jpg"
          title="Carmelo Kith Clothing 11"
        />
      </ImageContainer>
    </>
  );
};

export default Kids;
