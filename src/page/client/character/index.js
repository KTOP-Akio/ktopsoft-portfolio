import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import storyBack1_1 from "../../../utils/images/character/storyBack1_1.jpg";
import storyBack1_2 from "../../../utils/images/character/storyBack1_2.jpg";
import CharacterShadowImageFile from "../../../utils/images/character/characterShadow.png";
import VoiceControlBackImageFile from "../../../utils/images/character/voiceMark.jpg";
import VoiceButtonImageFile from "../../../utils/images/character/mike.png";
import HistoryMarkImageFile from "../../../utils/images/character/historyMark.png";
import CharacterBackImageFile from "../../../utils/images/character/characterBack.png";
import NonActiveStoryImageFile from "../../../utils/images/character/nonActiveStory.png";
import ActiveStoryImageFile from "../../../utils/images/character/activyStory.png";
// import AvatarBackImageFile from "../../../utils/images/character/avatarListBack.png";
// import LeftArrowButtonImageFile from "../../../utils/images/character/leftArrow.png";
// import AvatarItemBackImageFile from "../../../utils/images/character/avatarBack.png";

import CharacterImageFile1 from "../../../utils/images/character/character1.png";
import CharacterMarkImageFile1 from "../../../utils/images/character/characterMark1.png";
import CharacterSkillImageFile1 from "../../../utils/images/character/charactesrSkill1.png";
import AvatarImageFile1 from "../../../utils/images/character/characterAvatar1.png";
import CharacterImageFile2 from "../../../utils/images/character/character2.png";
import CharacterMarkImageFile2 from "../../../utils/images/character/characterMark2.png";
import CharacterSkillImageFile2 from "../../../utils/images/character/charactesrSkill2.png";
import AvatarImageFile2 from "../../../utils/images/character/characterAvatar2.png";

const lang = ["JP", "EN"];
const imageList = [storyBack1_1, storyBack1_2];
const storyList = [
  "Yuki Ono",
  "Akio Ito",
  "Chee Ming",
  "Haruki Nakamura",
  "Arunathish RV",
];
const avatarList = [
  {
    character: CharacterImageFile1,
    avatar: AvatarImageFile1,
    mark: CharacterMarkImageFile1,
    name: "Yuki Ono",
    role: "Lead Game Dev.",
    voiceName: ["ゆき　おの", "Yuki Ono"],
    history: `I'm Yuki and 28 years old this year.  I live in the Tokyo in Japan.
    I have graduated Tokyo and Osaka University in 2014 , 2017 
    and achieved Bacholer's degree in computer science.
    After graduation , I have found my first game company with 9 members and received tasks
    from clients.  From 2022 to 2023 , I have joined many companies and developed world class
    software products from start to finish as lead , senior game developer.  For 7 years , I have took part in variety
    game projects on different target platforms like PC , Mobile , WebGL
     and shipped 20 + titles on Google Play,  Steam and company marketplace.`,
    skill: CharacterSkillImageFile1,
  },
  {
    character: CharacterImageFile2,
    avatar: AvatarImageFile2,
    mark: CharacterMarkImageFile2,
    name: "Akio Ito",
    role: "Full Stack Dev.",
    voiceName: ["VA: IWAMI Manaka", "VA: Kelly Baskin"],
    history: `A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius.Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt.As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.`,
    skill: CharacterSkillImageFile2,
  },
  {
    character: CharacterImageFile1,
    avatar: AvatarImageFile1,
    mark: CharacterMarkImageFile1,
    name: "Chee Ming",
    role: "Blockchain Dev.",
    voiceName: ["VA: SAITO Chiwa", "VA: Stephanie Southerland"],
    history: `As the Acting Grand Master of the Knights, Jean has always been
    devoted to her duties and maintaining peace in Mondstadt.
    <br /> She had taken precautions long before the onset of
    Stormterror's assault, and she will guard Mondstadt with her life as`,
    skill: CharacterSkillImageFile1,
  },
  {
    character: CharacterImageFile1,
    avatar: AvatarImageFile1,
    mark: CharacterMarkImageFile1,
    name: "Haruki Nakamura",
    role: "Full Stack Dev.",
    voiceName: ["VA: SAITO Chiwa", "VA: Stephanie Southerland"],
    history: `As the Acting Grand Master of the Knights, Jean has always been
    devoted to her duties and maintaining peace in Mondstadt.
    <br /> She had taken precautions long before the onset of
    Stormterror's assault, and she will guard Mondstadt with her life as`,
    skill: CharacterSkillImageFile1,
  },
  {
    character: CharacterImageFile1,
    avatar: AvatarImageFile1,
    mark: CharacterMarkImageFile1,
    name: "Arunathish RV",
    role: "Assistant",
    voiceName: ["VA: SAITO Chiwa", "VA: Stephanie Southerland"],
    history: `As the Acting Grand Master of the Knights, Jean has always been
    devoted to her duties and maintaining peace in Mondstadt.
    <br /> She had taken precautions long before the onset of
    Stormterror's assault, and she will guard Mondstadt with her life as`,
    skill: CharacterSkillImageFile1,
  }
];

const CharacterPage = () => {
  const [activeBack, setActiveBack] = useState(0);
  const [activeVoice, setActiveVoice] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (activeBack === imageList.length - 1) setActiveBack(0);
      else setActiveBack(activeBack + 1);
    }, 20000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleVoice = () => {
    setActiveVoice((activeVoice + 1) % 2);
  };
  // const handleLeftButton = () => {
  //   if (avatarList.length === 0) return;
  //   setCurrentAvatar(
  //     (currentAvatar + avatarList.length - 1) % avatarList.length
  //   );
  // };
  // const handleRightButton = () => {
  //   if (avatarList.length === 0) return;
  //   setCurrentAvatar((currentAvatar + 1) % avatarList.length);
  // };
  // const handleAvatarClick = (index) => {
  //   setCurrentAvatar(index);
  // };

  return (
    <Wrapper>
      <AnimationBackground src={imageList[activeBack]} />
      <CharacterImg src={avatarList[currentStory].character} />
      <CharacterMark src={avatarList[currentStory].mark} />
      <ShadowBackground />
      <Container>
        <CharacterRole>
          {avatarList[currentStory].role}
        </CharacterRole>
        <LineWrapper>
          <VoiceControlWrapper>
            <VoiceOwnerName>
              {avatarList[currentStory].voiceName[activeVoice]}
            </VoiceOwnerName>
            <VoiceButton />
          </VoiceControlWrapper>
          <VoiceSwitch onClick={toggleVoice}>
            <VoiceCountry active={activeVoice}>{lang[0]}</VoiceCountry>
            <VoiceCountry active={!activeVoice}>{lang[1]}</VoiceCountry>
          </VoiceSwitch>
        </LineWrapper>
        <CharacterHistoryWrapper>
          <HistoryMark />
          <HistoryDetail>{avatarList[currentStory].history}</HistoryDetail>
        </CharacterHistoryWrapper>
      </Container>
      <CharacterSkill src={avatarList[currentStory].skill} />
      <CharacterBack src={CharacterBackImageFile} />
      <LeftSidebar>
        {storyList.map((item, index) => (
          <StoryItem
            key={index}
            active={index === currentStory}
            onClick={() => setCurrentStory(index)}
          >
            {item}
          </StoryItem>
        ))}
      </LeftSidebar>
      {/* <AvatarWrapper>
        <LeftArrowButton
          src={LeftArrowButtonImageFile}
          onClick={handleLeftButton}
        />
        <AvatarContainer>
          {avatarList.map((item, index) => (
            <AvatarItem
              active={index === currentAvatar}
              onClick={() => handleAvatarClick(index)}
            >
              <Avatar src={item.avatar} />
              <AvatarName>{item.name}</AvatarName>
            </AvatarItem>
          ))}
        </AvatarContainer>
        <RightArrowButton
          src={LeftArrowButtonImageFile}
          onClick={handleRightButton}
        />
      </AvatarWrapper> */}
    </Wrapper>
  );
};

const BackgroundAnimation = keyframes`
  0% {
      transform: scale(1.1);
  }
  100% {
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const AnimationBackground = styled.img`
  width: 100%;
  height: 100vh;
  animation: 21s ${BackgroundAnimation} infinite;
  position: absolute;
`;
const ShadowBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: url(${CharacterShadowImageFile}) no-repeat;
  background-position: center bottom;
  background-size: auto 100vh;
`;
const CharacterImg = styled.img`
  z-index: 1;
  height: 100vh;
  position: absolute;
  left: calc(50% - 63vh);
  transform: translateX(0);
`;
const CharacterMark = styled.img`
  position: absolute;
  top: 10vh;
  left: calc(50% - 60vh);
  height: 378px;
  opacity: 0.1;
`;
const Container = styled.div`
  z-index: 2;
  position: absolute;
  top: 18vh;
  left: calc(50% - 53vh);
  width: 550px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 10px;
  &::before {
    display: block;
    content: "";
    width: 180px;
    height: 4px;
    background: #e3bc8c;
  }
`;
const CharacterRole = styled.div`
  height: 120px;
  font-size: 80px;
  font-weight: 400;
  font-family: LilitaOne;
  text-shadow: 0 0 17px rgba(110, 159, 193, 0.24), 0 0 17px rgba(110, 159, 193, 0.24);
  color: white;
  white-space: nowrap;
`;
const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const VoiceControlWrapper = styled.div`
  background: #cca574 url(${VoiceControlBackImageFile}) no-repeat;
  background-position: left top;
  background-size: 54px;
  margin-top: -10px;
  display: flex;
  justify-content: space-between;
  width: 370px;
  height: 54px;
  font-size: 24px;
  color: #24333c;
  line-height: 54px;
  padding-left: 60px;
  box-shadow: 2px 3px 6px 0 rgba(12, 12, 12, 0.2);
`;
const VoiceButton = styled.div`
  width: 64px;
  height: 64px;
  background-image: url(${VoiceButtonImageFile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 64px;
  cursor: pointer;
  transform: translate(5px, -5px);
`;
const VoiceSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 32px;
  padding: 0px 2px;
  border-radius: 16px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(18, 18, 18, 0.6);
  user-select: none;
  cursor: pointer;
`;
const VoiceCountry = styled.div`
  width: 26px;
  height: 26px;
  color: #dbb17d;
  font-size: 20px;
  text-align: center;
  line-height: 26px;
  ${(props) => props.active && `background-color: #dbb17d; border-radius: 13px`}
`;
const VoiceOwnerName = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const CharacterHistoryWrapper = styled.div`
  z-index: 100;
  background: rgba(1, 1, 1, 0.5);
  font-size: 16px;
  color: #fff;
  display: flex;
  gap: 20px;
  padding: 10px 0px 10px 15px;
`;
const HistoryMark = styled.div`
  content: "";
  min-width: 20px;
  width: 20px;
  height: 20px;
  background: url(${HistoryMarkImageFile}) center no-repeat;
  background-size: 20px;
`;
const HistoryDetail = styled.div`
  max-height: 130px;
  padding-right: 50px;
  overflow: auto;
  font-size: 16px;
  scrollbar-color: rgba(1, 1, 1, 0.8) rgba(1, 1, 1, 0.5);
`;
const CharacterSkill = styled.img`
  z-index: 1;
  position: absolute;
  top: 62vh;
  left: calc(50% - 26vh);
  transform-origin: left center;
`;
const CharacterBack = styled.img`
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: calc(50% - 79vh);
  content: "";
  width: 154vh;
  height: 52vh;
`;
const LeftSidebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 370px;
  height: 100%;
  padding-top: 187px;
  &::before {
    position: absolute;
    top: 0;
    left: 37px;
    display: block;
    content: "";
    width: 2px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.14);
  }
`;
const StoryItem = styled.div`
  width: 100%;
  height: 54px;
  line-height: 54px;
  font-size: 18px;
  color: #fff;
  padding-left: 56px;
  background: 18px center no-repeat;
  background-image: url(${NonActiveStoryImageFile});
  background-size: 40px;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  ${(props) =>
    props.active &&
    `
    text-shadow: none;
    padding-left: 70px;
    background: left center no-repeat;
    background-image: url(${ActiveStoryImageFile});
    background-size: contain;
    pointer-events: none;
  `}
`;
// const AvatarWrapper = styled.div`
//   z-index: 1;
//   display: flex;
//   gap: 50px;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   padding-top: 22px;
//   width: 100%;
//   height: 190px;
//   background: rgba(204, 204, 204, 0.2);
//   user-select: none;
//   &::before {
//     z-index: 0;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     display: block;
//     content: "";
//     width: 100%;
//     height: 156px;
//     background: url(${AvatarBackImageFile}) center bottom repeat no-repeat;
//   }
// `;
// const LeftArrowButton = styled.img`
//   z-index: 1;
//   width: 45px;
//   height: 64px;
//   cursor: pointer;
//   user-select: none;
// `;
// const RightArrowButton = styled.img`
//   z-index: 1;
//   width: 45px;
//   height: 64px;
//   transform: rotate(180deg);
//   cursor: pointer;
//   user-select: none;
// `;
// const AvatarContainer = styled.div`
//   z-index: 1;
//   display: flex;
//   gap: 25px;
// `;
// const AvatarItem = styled.div`
//   width: 110px;
//   min-width: 110px;
//   height: 150px;
//   min-height: 150px;
//   background: transparent url(${AvatarItemBackImageFile}) no-repeat 0 0;
//   font-size: 0;
//   cursor: pointer;
//   display: flex;
//   flex-direction: column;
//   cursor: pointer;
//   user-select: none;
//   &: hover {
//     background-position: 0 -150px;
//     div {
//       color: black;
//     }
//   }
//   ${(props) =>
//     props.active &&
//     `
//     background-position: 0 -150px;
//     div {
//       color: black;
//     }
//   `}
// `;
// const Avatar = styled.img`
//   margin: 2px auto 0;
//   width: 106px;
//   height: 106px;
// `;
// const AvatarName = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
//   font-size: 16px;
//   color: white;
//   text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
// `;
export default CharacterPage;
