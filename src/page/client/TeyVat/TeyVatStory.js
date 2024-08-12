import React, { useState } from "react";
import styled from "styled-components";
import TeyVatModal from "../../../components/TeyVatModal";

import StoryTitleHrLeftImageFile from "../../../utils/images/teyvat/titleHrLeft.png";
import StoryTitleHrRightImageFile from "../../../utils/images/teyvat/titleHrRight.png";
import TeyVatGeneralButton from "../../../components/TeyvatGeneralButton";
import { allowScroll, stopScroll } from "../../../redux/teyvatSlice";
import { useDispatch } from "react-redux";

import KTOPIAImage1 from "../../../utils/images/teyvat/KTOPIA/1.JPG";
import KTOPIAImage2 from "../../../utils/images/teyvat/KTOPIA/2.JPG";
import KTOPIAImage3 from "../../../utils/images/teyvat/KTOPIA/3.JPG";
import KTOPIAImage4 from "../../../utils/images/teyvat/KTOPIA/4.JPG";

import GenshinRoyalImage1 from "../../../utils/images/teyvat/GenshinRoyal/1.JPG";
import GenshinRoyalImage2 from "../../../utils/images/teyvat/GenshinRoyal/2.JPG";
import GenshinRoyalImage3 from "../../../utils/images/teyvat/GenshinRoyal/3.JPG";
import GenshinRoyalImage4 from "../../../utils/images/teyvat/GenshinRoyal/4.JPG";
import GenshinRoyalImage5 from "../../../utils/images/teyvat/GenshinRoyal/5.JPG";
import GenshinRoyalImage6 from "../../../utils/images/teyvat/GenshinRoyal/6.JPG";
import GenshinRoyalImage7 from "../../../utils/images/teyvat/GenshinRoyal/7.JPG";
import GenshinRoyalImage8 from "../../../utils/images/teyvat/GenshinRoyal/8.JPG";
import GenshinRoyalImage9 from "../../../utils/images/teyvat/GenshinRoyal/9.JPG";

import TCGWorldImage1 from "../../../utils/images/teyvat/TCG World/1.JPG";
import TCGWorldImage2 from "../../../utils/images/teyvat/TCG World/2.JPG";
import TCGWorldImage3 from "../../../utils/images/teyvat/TCG World/3.JPG";
import TCGWorldImage4 from "../../../utils/images/teyvat/TCG World/4.JPG";
import TCGWorldImage5 from "../../../utils/images/teyvat/TCG World/5.JPG";
import TCGWorldImage6 from "../../../utils/images/teyvat/TCG World/6.JPG";
import TCGWorldImage7 from "../../../utils/images/teyvat/TCG World/7.JPG";
import TCGWorldImage8 from "../../../utils/images/teyvat/TCG World/8.JPG";
import TCGWorldImage9 from "../../../utils/images/teyvat/TCG World/9.JPG";
import TCGWorldImage10 from "../../../utils/images/teyvat/TCG World/10.JPG";
import TCGWorldImage11 from "../../../utils/images/teyvat/TCG World/1.PNG";

import LegendOfMetaImage1 from "../../../utils/images/teyvat/LegendOfMeta/1.PNG";
import LegendOfMetaImage2 from "../../../utils/images/teyvat/LegendOfMeta/2.PNG";
import LegendOfMetaImage3 from "../../../utils/images/teyvat/LegendOfMeta/3.PNG";
import LegendOfMetaImage4 from "../../../utils/images/teyvat/LegendOfMeta/4.PNG";
import LegendOfMetaImage5 from "../../../utils/images/teyvat/LegendOfMeta/5.PNG";
import LegendOfMetaImage6 from "../../../utils/images/teyvat/LegendOfMeta/6.PNG";
import LegendOfMetaImage7 from "../../../utils/images/teyvat/LegendOfMeta/7.PNG";
import LegendOfMetaImage8 from "../../../utils/images/teyvat/LegendOfMeta/8.PNG";
import LegendOfMetaImage9 from "../../../utils/images/teyvat/LegendOfMeta/9.PNG";
import LegendOfMetaImage10 from "../../../utils/images/teyvat/LegendOfMeta/10.PNG";
import LegendOfMetaImage11 from "../../../utils/images/teyvat/LegendOfMeta/1.JPG";

import UnhingedExtravagenceImage1 from "../../../utils/images/teyvat/Unhinged Extravagence/1.jpg";
import UnhingedExtravagenceImage2 from "../../../utils/images/teyvat/Unhinged Extravagence/2.jpg";
import UnhingedExtravagenceImage3 from "../../../utils/images/teyvat/Unhinged Extravagence/3.jpg";
import UnhingedExtravagenceImage4 from "../../../utils/images/teyvat/Unhinged Extravagence/4.jpg";
import UnhingedExtravagenceImage5 from "../../../utils/images/teyvat/Unhinged Extravagence/5.jpg";
import UnhingedExtravagenceImage6 from "../../../utils/images/teyvat/Unhinged Extravagence/6.jpg";
import UnhingedExtravagenceImage7 from "../../../utils/images/teyvat/Unhinged Extravagence/7.jpg";
import UnhingedExtravagenceImage8 from "../../../utils/images/teyvat/Unhinged Extravagence/8.jpg";
import UnhingedExtravagenceImage9 from "../../../utils/images/teyvat/Unhinged Extravagence/9.jpg";
import UnhingedExtravagenceImage10 from "../../../utils/images/teyvat/Unhinged Extravagence/10.jpg";
import UnhingedExtravagenceImage11 from "../../../utils/images/teyvat/Unhinged Extravagence/11.jpg";
import UnhingedExtravagenceImage12 from "../../../utils/images/teyvat/Unhinged Extravagence/12.jpg";
import UnhingedExtravagenceImage13 from "../../../utils/images/teyvat/Unhinged Extravagence/13.jpg";
import UnhingedExtravagenceImage14 from "../../../utils/images/teyvat/Unhinged Extravagence/14.jpg";
import UnhingedExtravagenceImage15 from "../../../utils/images/teyvat/Unhinged Extravagence/15.jpg";
import UnhingedExtravagenceImage16 from "../../../utils/images/teyvat/Unhinged Extravagence/16.jpg";

import FIghtingCatsImage1 from "../../../utils/images/teyvat/FightingCats/1.JPG";
import FIghtingCatsImage2 from "../../../utils/images/teyvat/FightingCats/2.JPG";
import FIghtingCatsImage3 from "../../../utils/images/teyvat/FightingCats/3.JPG";
import FIghtingCatsImage4 from "../../../utils/images/teyvat/FightingCats/4.JPG";
import FIghtingCatsImage5 from "../../../utils/images/teyvat/FightingCats/5.JPG";

import DanceChallengeImage1 from "../../../utils/images/teyvat/DanceChallenge/1.JPG";
import DanceChallengeImage2 from "../../../utils/images/teyvat/DanceChallenge/2.JPG";
import DanceChallengeImage3 from "../../../utils/images/teyvat/DanceChallenge/3.JPG";
import DanceChallengeImage4 from "../../../utils/images/teyvat/DanceChallenge/4.JPG";
import DanceChallengeImage5 from "../../../utils/images/teyvat/DanceChallenge/5.JPG";
import DanceChallengeImage6 from "../../../utils/images/teyvat/DanceChallenge/6.JPG";
import DanceChallengeImage7 from "../../../utils/images/teyvat/DanceChallenge/7.JPG";
import DanceChallengeImage8 from "../../../utils/images/teyvat/DanceChallenge/8.JPG";

import SciFiLabImage1 from "../../../utils/images/teyvat/SciFi Lab/1.JPG";
import SciFiLabImage2 from "../../../utils/images/teyvat/SciFi Lab/2.JPG";
import SciFiLabImage3 from "../../../utils/images/teyvat/SciFi Lab/3.JPG";
import SciFiLabImage4 from "../../../utils/images/teyvat/SciFi Lab/4.JPG";

import EONWarImage1 from "../../../utils/images/teyvat/EONWar/1.jpg";
import EONWarImage2 from "../../../utils/images/teyvat/EONWar/2.jpg";
import EONWarImage3 from "../../../utils/images/teyvat/EONWar/3.jpg";
import EONWarImage4 from "../../../utils/images/teyvat/EONWar/4.jpg";
import EONWarImage5 from "../../../utils/images/teyvat/EONWar/5.jpg";
import EONWarImage6 from "../../../utils/images/teyvat/EONWar/6.jpg";
import EONWarImage7 from "../../../utils/images/teyvat/EONWar/7.jpg";
import EONWarImage8 from "../../../utils/images/teyvat/EONWar/8.jpg";
import EONWarImage9 from "../../../utils/images/teyvat/EONWar/9.jpg";
import EONWarImage10 from "../../../utils/images/teyvat/EONWar/10.jpg";
import EONWarImage11 from "../../../utils/images/teyvat/EONWar/11.jpg";
import EONWarImage12 from "../../../utils/images/teyvat/EONWar/12.jpg";

const modalContent = [
  {
    title: "KTOPIA",
    contents: [
      {
        subTitle: "",
        subContent: ``,
        images: [
          KTOPIAImage1,
          KTOPIAImage2,
          KTOPIAImage3,
          KTOPIAImage4
        ],
      },
    ],
  },
  {
    title: "Genshin Royal",
    contents: [
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/hv-MX7wSRpc",
      },
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/WgTJ-pR-4Oc",
      },
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/Z5nb2-CF06I",
      },
      {
        subTitle: "",
        subContent: ``,
        images: [
          GenshinRoyalImage1,
          GenshinRoyalImage2,
          GenshinRoyalImage3,
          GenshinRoyalImage4,
          GenshinRoyalImage5,
          GenshinRoyalImage6,
          GenshinRoyalImage7,
          GenshinRoyalImage8,
          GenshinRoyalImage9
        ],
      },
    ],
  },
  {
    title: "TCG World",
    contents: [
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/QAn9kcUyB7I",
      },
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/6Ss4PIQgFR8",
      },
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/mQhZWFYnMhk",
      },
      {
        subTitle: "",
        subContent: ``,
        images: [
          TCGWorldImage1,
          TCGWorldImage2,
          TCGWorldImage3,
          TCGWorldImage4,
          TCGWorldImage5,
          TCGWorldImage6,
          TCGWorldImage7,
          TCGWorldImage8,
          TCGWorldImage9,
          TCGWorldImage10,
          TCGWorldImage11
        ],
      },
    ],
  },
  {
    title: "Legend of Meta",
    contents: [
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/-mq10WPRG80?si=T6ee_VmUprzXVRAG",
      },
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/mBQzttUeEPY?si=_m6-nuknkfheoclV",
      },
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/LRaGFsKS8qU?si=DCFfykMNXsvE_m8k",
      },
      {
        subTitle: "",
        subContent: ``,
        images: [
          LegendOfMetaImage1,
          LegendOfMetaImage2,
          LegendOfMetaImage3,
          LegendOfMetaImage4,
          LegendOfMetaImage5,
          LegendOfMetaImage6,
          LegendOfMetaImage7,
          LegendOfMetaImage8,
          LegendOfMetaImage9,
          LegendOfMetaImage10,
          LegendOfMetaImage11
        ],
      },
    ],
  },
  {
    title: "Unhinged Extravagence",
    contents: [
      {
        subTitle: "",
        subContent: ``,
        images: [
          UnhingedExtravagenceImage1,
          UnhingedExtravagenceImage2,
          UnhingedExtravagenceImage3,
          UnhingedExtravagenceImage4,
          UnhingedExtravagenceImage5,
          UnhingedExtravagenceImage6,
          UnhingedExtravagenceImage7,
          UnhingedExtravagenceImage8,
          UnhingedExtravagenceImage9,
          UnhingedExtravagenceImage10,
          UnhingedExtravagenceImage11,
          UnhingedExtravagenceImage12,
          UnhingedExtravagenceImage13,
          UnhingedExtravagenceImage14,
          UnhingedExtravagenceImage15,
          UnhingedExtravagenceImage16
        ],
      },
    ],
  },
  {
    title: "Fighting Cats",
    contents: [
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/DySZrvKRPxo?si=G2D_UthocPAZADFe",
      },
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/-4Cz1lff_Lg?si=Zw6VmY-0BQ_Zn-_M",
      },
      {
        subTitle: "",
        subContent: ``,
        images: [
          FIghtingCatsImage1,
          FIghtingCatsImage2,
          FIghtingCatsImage3,
          FIghtingCatsImage4,
          FIghtingCatsImage5
        ],
      },
    ],
  },
  {
    title: "Dance Challenge",
    contents: [
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/IUAF3dmScoQ",
      },
      {
        subTitle: "",
        subContent: ``,
        images: [
          DanceChallengeImage1,
          DanceChallengeImage2,
          DanceChallengeImage3,
          DanceChallengeImage4,
          DanceChallengeImage5,
          DanceChallengeImage6,
          DanceChallengeImage7,
          DanceChallengeImage8
        ],
      },
    ],
  },
  {
    title: "Sci-Fi Lab",
    contents: [
      {
        subTitle: "",
        subContent: ``,
        video: "https://www.youtube.com/embed/mLDzOZ7PFsM?si=BOPOv0OqZOSjqsW4",
      },
      {
        subTitle: "",
        subContent: ``,
        images: [
          SciFiLabImage1,
          SciFiLabImage2,
          SciFiLabImage3,
          SciFiLabImage4
        ],
      },
    ],
  },
  {
    title: "EON War",
    contents: [
      {
        subTitle: "",
        subContent: ``,
        images: [
          EONWarImage1,
          EONWarImage2,
          EONWarImage3,
          EONWarImage4,
          EONWarImage5,
          EONWarImage6,
          EONWarImage7,
          EONWarImage8,
          EONWarImage9,
          EONWarImage10,
          EONWarImage11,
          EONWarImage12,
        ],
      },
    ],
  },
];
const TeyVatStory = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    dispatch(allowScroll());
    setShowModal(true);
    window.fullpage_api.setAllowScrolling(false);
    window.fullpage_api.setKeyboardScrolling(false);
  };
  const handleCloseModal = () => {
    dispatch(stopScroll());
    setShowModal(false);
    window.fullpage_api.setAllowScrolling(true);
    window.fullpage_api.setKeyboardScrolling(true);
  };

  return (
    <Wrapper ref={props.refProps} bkimage={props.bkimage}>
      <Container>
        <StoryMark src={props.markimage} />
        <StoryTitleWrapper>
          <StoryTitleHrLeft src={StoryTitleHrLeftImageFile} />
          <StoryTitle>{props.title}</StoryTitle>
          <StoryTitleHrRight src={StoryTitleHrRightImageFile} />
        </StoryTitleWrapper>
        <StoryDetail>{props.detail}</StoryDetail>
        <TeyVatGeneralButton handleClick={handleOpenModal} />
        <TeyVatModal show={showModal} closeModal={handleCloseModal} modalContent={modalContent[props.index]} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bkimage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 200px;
  z-index: 1;
`;
const Container = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StoryMark = styled.img`
  width: 12vh;
  margin-bottom: 10px;
`;
const StoryTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const StoryTitleHrLeft = styled.img`
  width: 35.6vh;
  height: 1.3vh;
`;
const StoryTitleHrRight = styled.img`
  width: 35.6vh;
  height: 1.3vh;
  transform: rotateY(180deg);
`;
const StoryTitle = styled.div`
  font-family: LilitaOne;
  font-weight: 400;
  font-size: 4.6vh;
  color: white;
  white-space: nowrap;
`;
const StoryDetail = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  line-height: 1.8;
  color: white;
  margin-bottom: 100px;
  white-space: pre-line;
`;
export default TeyVatStory;
