import React, { useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import ImageContainer from "../../components/ImageContainer";
import ImageCard from "../../components/ImageCard";
import ImageCarousel from "../../components/ImageCarousel";

import { womenImages } from "../../consts";

const Women = () => {
  const [open, setOpen] = useState(false);

  const handleFocus = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavigationBar />
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksClothing.jpg"
          title="Women Knicks Clothing"
          handleFocus={handleFocus}
        />
        <ImageCard
          imgSrc="WomenKnicksClothing2.jpg"
          title="Women Knicks Clothing 2"
          handleFocus={handleFocus}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksClothing4.jpg"
          title="Women Knicks Clothing 4"
          handleFocus={handleFocus}
        />
        <ImageCard
          imgSrc="WomenKnicksClothing5.jpg"
          title="Women Knicks Clothing 5"
          handleFocus={handleFocus}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksSweater.jpg"
          title="Women Knicks Sweater"
          handleFocus={handleFocus}
        />
        <ImageCard
          imgSrc="WomenKnicksSweater2.jpg"
          title="Women Knicks Sweater 2"
          handleFocus={handleFocus}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksJersey.jpg"
          title="Women Knicks Jersey"
          handleFocus={handleFocus}
        />
        <ImageCard
          imgSrc="WomenKnicksJersey2.jpg"
          title="Women Knicks Jersey 2"
          handleFocus={handleFocus}
        />
      </ImageContainer>
      <ImageContainer>
        <ImageCard
          imgSrc="WomenKnicksClothing6.jpg"
          title="Women Knicks Clothing 6"
          handleFocus={handleFocus}
        />
        <ImageCard
          imgSrc="WomenKnicksClothing7.jpg"
          title="Women Knicks Clothing 7"
          handleFocus={handleFocus}
        />
      </ImageContainer>
      <ImageCarousel images={womenImages} isOpen={open} />
    </>
  );
};

export default Women;
