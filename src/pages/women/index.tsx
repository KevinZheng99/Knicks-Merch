import React from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../../components/NavigationBar";
import ImageContainer from "../../components/ImageContainer";
import ImageCard from "../../components/ImageCard";
import ImageCarousel from "../../components/ImageCarousel";
import { womenImages } from "../../consts";

const Women = () => {
  return (
    <>
      <NavigationBar />
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksClothing.jpg"
          title="Women Knicks Clothing"
        />
        <ImageCard
          imgSrc="WomenKnicksClothing2.jpg"
          title="Women Knicks Clothing 2"
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksClothing4.jpg"
          title="Women Knicks Clothing 4"
        />
        <ImageCard
          imgSrc="WomenKnicksClothing5.jpg"
          title="Women Knicks Clothing 5"
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksSweater.jpg"
          title="Women Knicks Sweater"
        />
        <ImageCard
          imgSrc="WomenKnicksSweater2.jpg"
          title="Women Knicks Sweater 2"
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard imgSrc="WomenKnicksJersey.jpg" title="Women Knicks Jersey" />
        <ImageCard
          imgSrc="WomenKnicksJersey2.jpg"
          title="Women Knicks Jersey 2"
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksClothing6.jpg"
          title="Women Knicks Clothing 6"
        />
        <ImageCard
          imgSrc="WomenKnicksClothing7.jpg"
          title="Women Knicks Clothing 7"
        />
      </ImageContainer>
      <ImageCarousel images={womenImages} />
    </>
  );
};

export default Women;
