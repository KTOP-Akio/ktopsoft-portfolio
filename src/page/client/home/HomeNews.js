import React from "react";
import styled from "styled-components";
import NewsSlider from "../../../components/NewsSlider";
import { CgAddR } from "react-icons/cg";

import NewsBackImageFile from "../../../utils/images/home/newsBack.jpg";
import NewsTitleImageFile from "../../../utils/images/home/NewsTitleHr.png";
import SlideImageFile1 from "../../../utils/images/home/slide1.jpg";
import SlideImageFile2 from "../../../utils/images/home/slide2.jpg";
import SlideImageFile3 from "../../../utils/images/home/slide3.jpg";
import SlideImageFile4 from "../../../utils/images/home/slide4.png";
import SlideImageFile5 from "../../../utils/images/home/slide5.png";

const slideImages = [
  SlideImageFile1,
  SlideImageFile2,
  SlideImageFile3,
  SlideImageFile4,
  SlideImageFile5,
];

const NewsDataList = [
  {
    title:
      "Earth Version 2 Pty Ltd",
    date: "From Mar 2024 To present",
  },
  {
    title:
      "TCG World Metaverse",
    date: "From Feb 2023 To Mar 2024",
  },
  {
    title:
      "Ink Studio",
    date: "From Jan 2023 To Feb 2023",
  },
  {
    title:
      "Soulo Fox Studio",
    date: "From Aug To Dec 2022",
  },
  {
    title:
      "Webaverse WebGL Metaverse",
    date: "From Jan 2022 To Aug 2022",
  },
];
const HomeNews = () => {
  return (
    <NewsWrapper>
      <NewsContainer>
        <NewsTitleWrapper>
          <NewsLeftHr src={NewsTitleImageFile} />
          <NewsTitle>Employment History</NewsTitle>
          <NewsRightHr src={NewsTitleImageFile} />
        </NewsTitleWrapper>
        <SliderWrapper>
          <SlideContainer>
            <NewsSlider images={slideImages} />
          </SlideContainer>
          <NewsDetailContainer>
            <NewsDetailTitleWrapper>
              <NewsDetailTitle>Latest</NewsDetailTitle>
            </NewsDetailTitleWrapper>
            <NewsDetailTitleContainer>
              {NewsDataList.map((item, index) => (
                <NewsDetailItem key={index}>
                  <NewsDetailItemTitle>{item.title}</NewsDetailItemTitle>
                  <NewsDetailItemDate>{item.date}</NewsDetailItemDate>
                </NewsDetailItem>
              ))}
            </NewsDetailTitleContainer>
            {/* <MoreButton>
              <CgAddR />
              More
            </MoreButton> */}
          </NewsDetailContainer>
        </SliderWrapper>
      </NewsContainer>
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${NewsBackImageFile});
  background-size: cover;
`;
const NewsContainer = styled.div`
  min-width: 1440px;
  display: flex;
  flex-direction: column;
`;
const NewsTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin: 183px auto 60px;
`;
const NewsLeftHr = styled.img`
  width: 385px;
  height: 14px;
`;
const NewsTitle = styled.div`
  color: white;
  font-size: 50px;
`;
const NewsRightHr = styled(NewsLeftHr)`
  transform: rotate(180deg);
`;
const SliderWrapper = styled.div`
  margin: auto;
  display: flex;
`;
const SlideContainer = styled.div`
  user-select: none;
  width: 640px;
  height: 400px;
`;
const NewsDetailContainer = styled.div`
  width: 640px;
  background: rgba(38, 18, 12, 0.62);
  padding: 35px 24px 0px 24px;
`;
const NewsDetailTitleWrapper = styled.div`
  font-size: 18px;
  color: #ffd49f;
  border-bottom: 3px solid rgba(255, 255, 255, 0.1);
`;
const NewsDetailTitle = styled.div`
  user-select: none;
  padding: 0px 19px 12px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  width: fit-content;
  border-bottom: 3px solid #ffd49f;
`;
const NewsDetailTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const NewsDetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0px 11px;
  border-bottom: 3px solid rgba(255, 255, 255, 0.1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  cursor: pointer;
`;
const NewsDetailItemTitle = styled.div`
  user-select: none;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
`;
const NewsDetailItemDate = styled.div`
  user-select: none;
  min-width: 85px;
  color: rgba(255, 255, 255, 0.35);
  font-size: 14px;
`;
const MoreButton = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-size: 18px;
  margin: 10px 20px;
  svg {
    font-size: 20px;
    color: #ffd49f;
    margin-right: 10px;
  }
  cursor: pointer;
  &: hover {
    color: #ffd49f;
    svg {
      background-color: #ffd49f60;
      background-size: 15px 15px;
      background-position: center;
    }
  }
`;
export default HomeNews;
