import React from "react";
import styled from "styled-components";

import LinkImage1 from "../../../utils/images/home/linkImage1.png";
import LinkImage2 from "../../../utils/images/home/linkImage2.png";
import LinkImage3 from "../../../utils/images/home/linkImage3.jpg";
import LinkImage4 from "../../../utils/images/home/linkImage4.jpg";
import LinkImage5 from "../../../utils/images/home/linkImage5.jpg";
import CharacterImage1 from "../../../utils/images/home/yuki_ono/main.png";
import CharacterImage2 from "../../../utils/images/home/chee_ming/main.png";
import CharacterImage3 from "../../../utils/images/home/character3.png";
import CharacterImage4 from "../../../utils/images/home/character4.png";
import CharacterImage5 from "../../../utils/images/home/character5.png";
import LinkMarkImageFile from "../../../utils/images/home/linkMark.png";
import LinkLineImageFile from "../../../utils/images/home/linkLine.png";

const linkData = [
  {
    bkImage: LinkImage1,
    character: CharacterImage1,
    title: "Yuki Ono",
  },
  {
    bkImage: LinkImage2,
    character: CharacterImage2,
    title: "Chee Ming",
  },
  {
    bkImage: LinkImage3,
    character: CharacterImage3,
    title: "Akio Ito",
  },
  {
    bkImage: LinkImage4,
    character: CharacterImage4,
    title: "Akari Hiroshi",
  },
  {
    bkImage: LinkImage5,
    character: CharacterImage5,
    title: "Yuki Miyake",
  },
  {
    bkImage: LinkImage4,
    character: CharacterImage4,
    title: "Aya Saito",
  },
  {
    bkImage: LinkImage4,
    character: CharacterImage4,
    title: "Arunathish RV",
  },
];

const HomeGameLink = () => {
  return (
    <HomeLinkWrapper>
      {linkData.map((item, index) => (
        <HomeLinkItem key={index}>
          <HomeLinkItemBack src={item.bkImage} />
          {/* <HomeLinkItemCharacter src={item.character} /> */}
          <HomeLinkItemLink>
            <HomeLinkItemTitle>{item.title}</HomeLinkItemTitle>
          </HomeLinkItemLink>
        </HomeLinkItem>
      ))}
      {/* <ComingBox>Coming Soon</ComingBox> */}
    </HomeLinkWrapper>
  );
};

const HomeLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const HomeLinkItem = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 260px;
  transition: 2s;
  overflow: hidden;
  &::before {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  &: hover {
    &::before {
      background: rgba(0, 0, 0, 0.2);
    }
    img {
      transform: scale(1.05);
      opacity: 1;
    }
    div {
      border: 6px solid white;
      &::after {
        opacity: 1;
      }
    }
  }
`;
const HomeLinkItemBack = styled.img`
  z-index: 0;
  position: absolute;
  transition: transform 0.4s;
  width: 100%;
  height: 260px;
`;
// const HomeLinkItemCharacter = styled.img`
//   z-index: 3;
//   position: absolute;
//   opacity: 0;
//   right: 0;
//   transition: 0.4s;
//   height: 280px;
// `;
const HomeLinkItemLink = styled.div`
  z-index: 4;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 260px;
  background-image: url(${LinkMarkImageFile});
  background-position: center;
  background-repeat: no-repeat;
  &::after {
    opacity: 0;
    transition: 0.4s;
    width: 210px;
    height: 10px;
    content: "";
    background: url(${LinkLineImageFile}) center no-repeat;
  }
`;
const HomeLinkItemTitle = styled.p`
  user-select: none;
  font-family: LilitaOne;
  font-size: 40px;
  // font-weight: bold;
  color: #fff;
  margin: 0px;
`;
const ComingBox = styled.div`
  user-select: none;
  cursor: pointer;
  z-index: 0;
  position: relative;
  width: 100%;
  height: 260px;
  font-size: 36px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`;
// const
export default HomeGameLink;
