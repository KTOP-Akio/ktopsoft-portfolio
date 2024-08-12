import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { IoClose } from "react-icons/io5";
// import Draggable from "react-draggable";

// import FaqButtonBackground from "../utils/images/public/guide.png";
import FaqButtonBackground3 from "../utils/images/public/guide/guide3.png";
import FaqItem from "./FaqItem";

const dataList = [
  {
    title: "GenShin",
    time: "Just now",
    content:
      "Z Bot: What would like you to do? Ask a question. Connect to sale...",
  },
  {
    title: "GenShin",
    time: "Just now",
    content:
      "Z Bot: What would like you to do? Ask a question. Connect to sale...",
  },
  {
    title: "GenShin",
    time: "Just now",
    content:
      "Z Bot: What would like you to do? Ask a question. Connect to sale...",
  },
  {
    title: "GenShin",
    time: "Just now",
    content:
      "Z Bot: What would like you to do? Ask a question. Connect to sale...",
  },
  {
    title: "GenShin",
    time: "Just now",
    content:
      "Z Bot: What would like you to do? Ask a question. Connect to sale...",
  },
];
const FaqButton = () => {
  const [showFlag, setShowFlag] = useState(false);
  const [moving, setMoving] = useState(true);
  // const [mPos, setMousePosition] = useState({ x: 20, y: 20 });

  // const updateMousePosition = (ev) => {
  //   setMousePosition({ x: ev.clientX, y: ev.clientY });
  // };
  // const handleStart = (e) => {};
  // const handleDrag = (e) => {};
  // const handleStop = (e) => {};
  const toggleShowFlag = () => {
    setShowFlag(!showFlag);
    setMoving(!moving);
    // setMoving(!moving);
  };
  const toggleData = () => {
    setMoving(!moving);
    // setData(!data);
    // console.log("HELLO");
  };
  return (
    // <Draggable
    //   axis="both"
    //   handle=".handle"
    //   defaultPosition={{ x: 0, y: 0 }}
    //   position={null}
    //   grid={[1, 1]}
    //   scale={1}
    //   onStart={handleStart}
    //   onDrag={handleDrag}
    //   onStop={handleStop}
    // >
    // {/* <div className="handle"> */}
    <Wrapper>
      <Container showflag={showFlag}>
        {!showFlag ? (
          <Character
            src={FaqButtonBackground3}
            move={moving}
            showflag={showFlag}
            onClick={toggleShowFlag}
            onAnimationEnd={toggleData}
          />
        ) : (
          <FaqDialog showflag={showFlag}>
            <DialogHeader>
              <DialogTitle>GenShin</DialogTitle>
              <DialogCloseBtn onClick={toggleShowFlag}>
                <IoClose />
              </DialogCloseBtn>
            </DialogHeader>
            <DialogContentWrapper>
              <DialogContentHeader>My Conversations</DialogContentHeader>
              {dataList.map((item, index) => (
                <FaqItem
                  title={item.title}
                  time={item.time}
                  content={item.content}
                  key={index}
                />
              ))}
            </DialogContentWrapper>
            <DialogFooter>
              <DialogNewButton>New Conversation</DialogNewButton>
            </DialogFooter>
          </FaqDialog>
        )}
      </Container>
    </Wrapper>
    // </div>
    // {/* </Draggable> */}
  );
};

const MyAnimation = keyframes`
  0% {
      transform: translateY(10px);
  }
  100% {
  }
`;

const ShowAnimation = keyframes`
  0% {
    transform: translate(50%, 50%) scale(0.1,0.1);
      opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const HideAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    transform: translate(50%, 50%) scale(0.1,0.1);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  right: 50px;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  //   background-color: rgb(23, 73, 77);
`;
const Container = styled.div`
  position: relative;
  ${(props) =>
    props.showflag
      ? `min-width: 350px;
  min-height: 480px;`
      : `min-width: 200px;
  min-height: 200px;`}
`;
const Character = styled.img`
  ${(props) =>
    !props.showflag
      ? "opacity: 1; z-index: 1001;"
      : "opacity: 0; z-index: 500;display: none;"}
  width: 200px;
  height: 200px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  user-select: none;
  cursor: pointer;
  animation: 0.5s
    ${(props) =>
      !props.move
        ? props.showflag
          ? HideAnimation
          : ShowAnimation
        : MyAnimation}
    ${(props) => props.move && "infinite alternate"};
`;

const FaqDialog = styled.div`
  ${(props) =>
    props.showflag
      ? "opacity: 1; z-index: 1001;"
      : "display: none;opacity: 0; z-index: 500;"}
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 480px;
  background-color: white;
  animation: 0.5s
    ${(props) => (!props.showflag ? HideAnimation : ShowAnimation)};
`;
const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 64px;
  height: 64px;
  background-color: rgb(23, 73, 77);
  color: white;
  padding: 0px 20px 0px 25px;
`;
const DialogTitle = styled.div`
  font-size: 18px;
  user-select: none;
`;
const DialogCloseBtn = styled.div`
  width: 32px;
  height: 32px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &: hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
  }
`;
const DialogContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 24px;
  height: 100%;
`;
const DialogContentHeader = styled.div`
  color: #212b35;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 12px;
`;
const DialogFooter = styled.div`
  padding: 12px 16px;
  width: 100%;
`;
const DialogNewButton = styled.div`
  width: 100%;
  border-radius: 20px;
  min-height: 40px;
  background-color: #058541;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;
export default FaqButton;
