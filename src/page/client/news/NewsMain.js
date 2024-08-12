import React from "react";
import styled from "styled-components";

import BackgroundImageFile from "../../../utils/images/news/newsBack.jpg";
import NewsItemImageFile1 from "../../../utils/images/news/newsImage1.jpg";

const statusColor = {
  Events: "#9c3",
  Info: "#ffc000",
};
const newsList = [
  {
    image: NewsItemImageFile1,
    title: `Discovery Collaboration Web Page "Discover Traces, Explore Nature" Now Available`,
    content: `Travelers, the "Teyvat Nature Discovery Tour" Discovery Collaboration web page "Discover Traces, Explore Nature" is online! Take part in the event to claim Primogems as well as the Serenitea Pot Furnishing "Let the Desert Bloom."`,
    date: `Mar 16, 2024`,
    status: `Events`,
  },
  {
    image: NewsItemImageFile1,
    title: `Discovery Collaboration Web Page "Discover Traces, Explore Nature" Now Available`,
    content: `Travelers, the "Teyvat Nature Discovery Tour" Discovery Collaboration web page "Discover Traces, Explore Nature" is online! Take part in the event to claim Primogems as well as the Serenitea Pot Furnishing "Let the Desert Bloom."`,
    date: `Mar 16, 2024`,
    status: `Events`,
  },
  {
    image: NewsItemImageFile1,
    title: `Discovery Collaboration Web Page "Discover Traces, Explore Nature" Now Available`,
    content: `Travelers, the "Teyvat Nature Discovery Tour" Discovery Collaboration web page "Discover Traces, Explore Nature" is online! Take part in the event to claim Primogems as well as the Serenitea Pot Furnishing "Let the Desert Bloom."`,
    date: `Mar 16, 2024`,
    status: `Events`,
  },
];
const NewsMain = () => {
  return (
    <Wrapper>
      <Container>
        {newsList.map((item, index) => (
          <NewsItemWrapper>
            <NewsItemContainer>
              <ImageContainer>
                <NewsItemImage src={item.image} />
              </ImageContainer>
              <NewsItemTitle>{item.title}</NewsItemTitle>
              <NewsItemContent>{item.content}</NewsItemContent>
            </NewsItemContainer>
            <LineWrapper>
              <NewsDate>{item.date}</NewsDate>
              <NewsStatus status={item.status}>{item.status}</NewsStatus>
            </LineWrapper>
          </NewsItemWrapper>
        ))}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${BackgroundImageFile});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  margin: auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  transform: translateY(30px);
`;
const NewsItemWrapper = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 420px;
  height: 450px;
  padding: 20px;
  background-color: rgba(18, 18, 18, 0.8);
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  opacity: 0.9;
  &: hover {
    img {
      transition: 0.5s;
      transform: scale(1.2);
    }
  }
`;
const NewsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 190px;
  overflow: hidden;
`;
const NewsItemImage = styled.img`
  width: 100%;
  height: 190px;
`;
const NewsItemTitle = styled.div`
  max-height: 70px;
  font-size: 24px;
  line-height: 34px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const NewsItemContent = styled.div`
  max-height: 88px;
  font-size: 16px;
  line-height: 22px;
  color: white;
  overflow: hidden;
`;
const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NewsDate = styled.div`
  font-size: 16px;
  color: #808080;
`;
const NewsStatus = styled.div`
  font-size: 16px;
  color: ${(props) => props.status && statusColor[props.status]};
`;
export default NewsMain;
