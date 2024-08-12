import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "../../../components/StyledButton";

import NewsItemImageFile1 from "../../../utils/images/news/newsImage1.jpg";

const filters = ["Latest", "Info", "Updates", "Events"];
const statusColor = {
  Events: "#9c3",
  Info: "#ffc000",
};
const detailList = [
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
const NewsView = () => {
  const [activeFilter, setActiverFilter] = useState(0);

  const handleClick = (index) => {
    setActiverFilter(index);
  };

  return (
    <Wrapper>
      <Container>
        <NewsFilterWrapper>
          {filters.map((item, index) => (
            <NewsFilterItem
              key={index}
              active={activeFilter === index}
              onClick={() => handleClick(index)}
            >
              {item}
            </NewsFilterItem>
          ))}
        </NewsFilterWrapper>
        <NewsDetailWrapper>
          {detailList.map((item, index) => (
            <NewsDetailItem>
              <NewsDetailImage src={NewsItemImageFile1} />
              <NewsDetailContentWrapper>
                <NewsDetailContentContainer key={index}>
                  <NewsDetailContentTitle>{item.title}</NewsDetailContentTitle>
                  <NewsDetailContent>{item.content}</NewsDetailContent>
                </NewsDetailContentContainer>
                <LineWrapper>
                  <NewsDetailContentDate>{item.date}</NewsDetailContentDate>
                  <NewsDetailContentStatus status={item.status}>
                    {item.status}
                  </NewsDetailContentStatus>
                </LineWrapper>
              </NewsDetailContentWrapper>
            </NewsDetailItem>
          ))}
        </NewsDetailWrapper>
        <StyledButton
          mwidth="100%"
          mheight="40px"
          mopacity="0.8"
          fsize="18px"
          bkcolor="#393b40"
          color="white"
          bdradius="4px"
          hv_bkcolor="#565961"
        >
          More
        </StyledButton>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  padding: 40px 0px 200px 0px;
`;
const Container = styled.div`
  margin: auto;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const NewsFilterWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
const NewsFilterItem = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 35px;
  font-size: 14px;
  color: #393b40;
  background-color: rgba(57, 59, 64, 0.18);
  border-radius: 4px;
  ${(props) =>
    props.active &&
    `
        color: #f4d8a8;
        background-color: #393b40;
    `}
  &: hover {
    transition: 0.5s;
    color: #f4d8a8;
    background-color: #393b40;
  }
`;
const NewsDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;
const NewsDetailItem = styled.div`
  user-select: none;
  cursor: pointer;
  display: flex;
  width: 100%;
  height: 170px;
  padding: 15px;
  background-color: #fafafa;
  border-radius: 4px;
  border: 3px solid rgba(57, 59, 64, 0);
  &:hover {
    background-color: white;
    border: 3px solid rgba(57, 59, 64, 0.15);
    transition: 0.5s;
  }
`;
const NewsDetailImage = styled.img`
  max-width: 245px;
  min-width: 245px;
  max-height: 140px;
  margin-right: 20px;
`;
const NewsDetailContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;
const NewsDetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
const NewsDetailContentTitle = styled.div`
  font-size: 24px;
  color: #393b40;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const NewsDetailContent = styled.div`
  max-height: 88px;
  font-size: 16px;
  line-height: 22px;
  overflow: hidden;
  color: #7d7d7d;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const LineWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 50px;
`;
const NewsDetailContentDate = styled.div`
  font-size: 16px;
  color: #808080;
`;
const NewsDetailContentStatus = styled.div`
  font-size: 16px;
  color: ${(props) => props.status && statusColor[props.status]};
`;
export default NewsView;
