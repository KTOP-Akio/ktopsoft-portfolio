import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

const NewsSlider = (props) => {
  const { images } = props;
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {images.map((item, index) => {
        return <SlideImage key={index} src={item} />;
      })}
    </Carousel>
  );
};

const SlideImage = styled.img``;
export default NewsSlider;
