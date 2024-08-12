import { LandingContext } from "../../../contexts/LandingContext";
import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";

import TeyVatHome from "./TeyVatHome";
import TeyVatStory from "./TeyVatStory";
import Footer from "../../../layout/client/footer";
import { initFullpage } from "../../../utils/initFullpage";
import TeyVatStoryBackgroundFile1 from "../../../utils/images/teyvat/story1.jpg";
import TeyVatStoryBackgroundFile2 from "../../../utils/images/teyvat/story2.jpg";
import TeyVatStoryBackgroundFile3 from "../../../utils/images/teyvat/story3.jpg";
import TeyVatStoryBackgroundFile4 from "../../../utils/images/teyvat/story4.jpg";
import TeyVatStoryBackgroundFile5 from "../../../utils/images/teyvat/story5.jpg";
import UnityMark from "../../../utils/images/teyvat/Icons/unity.png";
import UnrealMark from "../../../utils/images/teyvat/Icons/unreal.png";
import { hideFooter } from "../../../redux/layoutSlice";

const teyvatList = [
  {
    bkimage: TeyVatStoryBackgroundFile1,
    markimage: UnityMark,
    title: "KTOPIA",
    detail: `KTOPIA is a genshin impact mini series metaverse that players can join another virtual world and interact with others , have a communication , co-op battle and etc. There are 30 over genshin heroes and 120 over weapons are available here. As new style metaverse platform , KTOPIA provides to players better experience in the vast space than other previous well know platforms and supports Web3 experiences to audiences as Play to Earn game genre.`,
  },
  {
    bkimage: TeyVatStoryBackgroundFile2,
    markimage: UnityMark,
    title: "Genshin Royal",
    detail: `Genshin Royal is another kind of PlayerUnknown's BattleGround ( PUBG ) genre online multiplayer shooting game. Art concept is from Genshin Impact and the other environment is also anime style. This project target platform is WebGL and you can play it on our Website.  Genshin Royal provides to players cute and funny gameplay experiences and smooth shooting experience with switching First Person - Third Person Shooting mode change , also it provides Web3 Blockchain feature like Play to Earn mode. Target blockchain network is Ethereum and I will add more networks as soon as possible.`,
  },
  {
    bkimage: TeyVatStoryBackgroundFile3,
    markimage: UnityMark,
    title: "TCG World",
    detail: `TCG World is an online open world virtual gaming experience where players can earn TCG Coin 2.0, own virtual real estate, explore an 800 km2 world in 4k resolution, capture, battle and evolve creatures known as Sprites, operate your own online business, go on quests, attend concerts and comedy shows, or just have fun with your friends! 
    In TCG World your NFT is more than just a piece of art! Now players can take their NFTs into the gaming world and play. Everything a player owns in TCG World is an NFT, such as real estate, vehicles, pets, sprites and more!`,
  },
  {
    bkimage: TeyVatStoryBackgroundFile4,
    markimage: UnrealMark,
    title: "Legend of Meta",
    detail: `The city of scholars located in the west-central part of Teyvat. \n A fantastical nation of both lush rainforest and barren desert, where countless fruits of wisdom grow and are buried. Whether Travelers travel from afar through the forest to reach the academy city or delve deep into the desert to discover the historical ruins of the red desert, a wealth of valuable knowledge awaits them here.`,
  },
  {
    bkimage: TeyVatStoryBackgroundFile5,
    markimage: UnityMark,
    title: "Unhinged Extravagence",
    detail: `A terrestrial sea in the center of Teyvat. \n Following the direction of pure currents, crossing wilderness, the depths of the forests and vastness of the sea of sand, arriving at the origin of all the waters of the continent. At the top of the waterfall, in the depths of the capital atop the terrestrial sea... a story that has never been heard, a legend that has been forgotten, like a lost kingdom sunken beneath the waves, yearning for a bard to sing its drowned songs.`,
  },
  {
    bkimage: TeyVatStoryBackgroundFile1,
    markimage: UnityMark,
    title: "Fighting Cats",
    detail: `A terrestrial sea in the center of Teyvat. \n Following the direction of pure currents, crossing wilderness, the depths of the forests and vastness of the sea of sand, arriving at the origin of all the waters of the continent. At the top of the waterfall, in the depths of the capital atop the terrestrial sea... a story that has never been heard, a legend that has been forgotten, like a lost kingdom sunken beneath the waves, yearning for a bard to sing its drowned songs.`,
  },
  {
    bkimage: TeyVatStoryBackgroundFile2,
    markimage: UnityMark,
    title: "Dance Challenge",
    detail: `A terrestrial sea in the center of Teyvat. \n Following the direction of pure currents, crossing wilderness, the depths of the forests and vastness of the sea of sand, arriving at the origin of all the waters of the continent. At the top of the waterfall, in the depths of the capital atop the terrestrial sea... a story that has never been heard, a legend that has been forgotten, like a lost kingdom sunken beneath the waves, yearning for a bard to sing its drowned songs.`,
  },
  {
    bkimage: TeyVatStoryBackgroundFile3,
    markimage: UnrealMark,
    title: "Sci-Fi Lab",
    detail: `A terrestrial sea in the center of Teyvat. \n Following the direction of pure currents, crossing wilderness, the depths of the forests and vastness of the sea of sand, arriving at the origin of all the waters of the continent. At the top of the waterfall, in the depths of the capital atop the terrestrial sea... a story that has never been heard, a legend that has been forgotten, like a lost kingdom sunken beneath the waves, yearning for a bard to sing its drowned songs.`,
  },
  {
    bkimage: TeyVatStoryBackgroundFile4,
    markimage: UnityMark,
    title: "EON War",
    detail: `A terrestrial sea in the center of Teyvat. \n Following the direction of pure currents, crossing wilderness, the depths of the forests and vastness of the sea of sand, arriving at the origin of all the waters of the continent. At the top of the waterfall, in the depths of the capital atop the terrestrial sea... a story that has never been heard, a legend that has been forgotten, like a lost kingdom sunken beneath the waves, yearning for a bard to sing its drowned songs.`,
  },
];

const arrayIterator = [
  { title: "KTOPIA" },
  { title: "Genshin Royal" },
  { title: "TCG World" },
  { title: "Legend of Meta" },
  { title: "Unhinged Extravagence" },
  { title: "Fighting Cats" },
  { title: "Dance Challenge" },
  { title: "Sci-Fi Lab" },
  { title: "EON War" },
];

const TeyVatPage = () => {
  const dispatch = useDispatch();
  const { size } = useContext(LandingContext);
  const [sectionIdx, setSectionIdx] = useState(0);

  const handleSelectSlider = (idx) => {
    setSectionIdx(idx - 1);
    window.fullpage_api.moveTo(idx);
  };

  const handleSetIndex = (idx) => {
    setSectionIdx(idx - 1);
  };

  const scrollDownHomeButton = () => {
    window.fullpage_api.moveTo(2);
  };

  useEffect(() => {
    initFullpage(handleSetIndex);
    dispatch(hideFooter());
  }, []);

  const RectButton = ({ index, title }) => {
    return (
      <RectButtonContainer
        duration={0.1}
        onClick={() => handleSelectSlider(index+2)}
      >
        <svg
          width="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: "6px", cursor: "pointer" }}
        >
          <rect
            x="0.707107"
            y="10"
            width="13.1421"
            height="13.1421"
            transform="rotate(-45 0.707107 10)"
            fill={(sectionIdx - 1) === index ? "#FF1C6E" : "white"}
            fillOpacity="0.3"
            stroke={(sectionIdx - 1) === index ? "#FF1C6E" : "white"}
          />
        </svg>
        <SidebarText
        
          style={
            (sectionIdx - 1) === index
              ? { backgroundColor: "rgba(255, 28, 110, 0.5)" }
              : { backgroundColor: "teransparent" }
          }
        >
          {title}
        </SidebarText>
      </RectButtonContainer>
    );
  };

  return (
    <Wrapper>
      {(sectionIdx < 10 && sectionIdx !== 0) ? (
        <SidebarContainer>
          <ScrollTransition height={size.height}>
            <div style={{ marginBottom: "1.07vh" }}>
              {size.width > 1300 ? (
                <ScrollUpsideBar
                  height="18vh"
                  viewBox="0 0 10 185"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M5.00001 0.669876L9.33014 5L5.00001 9.33012L0.669881 5L5.00001 0.669876ZM4.25001 185L4.25001 5L5.75001 5L5.75001 185L4.25001 185Z"
                    fill="white"
                  />
                </ScrollUpsideBar>
              ) : (
                <ScrollUpsideBar
                  width="10"
                  height="67"
                  viewBox="0 0 10 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M5.00023 0.669873L9.33034 5.00002L5.0002 9.33013L0.670089 4.99998L5.00023 0.669873ZM4.25 66.5L4.25022 5L5.75022 5L5.75 66.5L4.25 66.5Z"
                    fill="white"
                  />
                </ScrollUpsideBar>
              )}
            </div>

            <RectButtonsContainer>
              <RectButtonsTransition>
                {arrayIterator.map((item, idx) => {
                  return (
                    <RectButton
                      index={idx}
                      title={item.title}
                      key={idx}
                    ></RectButton>
                  );
                })}
              </RectButtonsTransition>
            </RectButtonsContainer>

            <div style={{ marginTop: "1.07vh" }}>
              {size.width > 1400 ? (
                <ScrollUpsideBar
                  id="upperarrow"
                  height="18vh"
                  viewBox="0 0 10 185"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path
                    opacity="0.5"
                    d="M5.00001 0.669876L9.33014 5L5.00001 9.33012L0.669881 5L5.00001 0.669876ZM4.25001 185L4.25001 5L5.75001 5L5.75001 185L4.25001 185Z"
                    fill="white"
                  />
                </ScrollUpsideBar>
              ) : (
                <ScrollUpsideBar
                  width="10"
                  height="66"
                  viewBox="0 0 10 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M5.00023 65.8301L9.33034 61.5L5.0002 57.1699L0.670089 61.5L5.00023 65.8301ZM4.25 2.63777e-06L4.25022 61.5L5.75022 61.5L5.75 -2.63777e-06L4.25 2.63777e-06Z"
                    fill="white"
                  />
                </ScrollUpsideBar>
              )}
            </div>
          </ScrollTransition>
        </SidebarContainer>
      ) : (
        <></>
      )}
      <div id="fullpage">
        <div className="section">
          <TeyVatHome onButtonDownClick={scrollDownHomeButton} />
        </div>
        {teyvatList.map((item, index) => (
          <div className="section" key={index}>
            <TeyVatStory
              bkimage={item.bkimage}
              markimage={item.markimage}
              title={item.title}
              detail={item.detail}
              index={index}
            />
          </div>
        ))}
        <div className="section">
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .section {
    height: auto !important;
    font-size: unset !important;
  }
  .fp-watermark {
    display: none;
  }
`;
const SidebarContainer = styled.div`
  position: absolute;
  left: 50px;
  z-index: 1;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  @media (max-width: 1920px) {
    width: 60px;
  }
  @media (max-width: 768px) {
    width: 24px;
  }
`;
const ScrollTransition = styled.div`
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: start;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 60px;
  height: ${(props) => props.height}px;
  @media (max-width: 1300px) {
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    display: none !important;
  }
`;
const ScrollUpsideBarAnimation = keyframes`
  0%{
    clip-path: inset(175px 0px 0px 0px);
  }
  100%{
    clip-path: inset(0px 0px 0px 0px);
  }
`;
const ScrollUpsideBar = styled.svg`
  animation: ${ScrollUpsideBarAnimation} 1s ease 1;
  animation-fill-mode: forwards;
`;
const RectButtonsAppearAnimation = keyframes`
  0%{
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
  100%{
    transform: translateX(0px);
    -webkit-transform: translateX(0px);
  }
`;
const RectButtonsTransition = styled.div`
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${RectButtonsAppearAnimation} 0.8s ease 1;
  animation-fill-mode: forwards;
`;
const RectButtonsContainer = styled.div`
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
`;
const RectButtonAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const RectButtonContainer = styled.div`
  transform: ${(props) => (props.play === "true" ? "scale(0)" : "scale(1)")};
  animation: ${(props) => (props.play === "true" ? RectButtonAnimation : "")}
    0.5s ${(props) => props.duration * props.index}s
    cubic-bezier(0.65, 0.01, 0.39, 0.99) 1;
  animation-fill-mode: forwards;
  display: flex;
  align-items: center;
  margin-left: -11px;
`;
const SidebarText = styled.span`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
  padding: 2px 10px;
  white-space: nowrap;
`;
export default TeyVatPage;
