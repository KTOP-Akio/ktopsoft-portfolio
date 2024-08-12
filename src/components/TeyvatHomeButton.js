import React from "react";
import styled, { keyframes } from "styled-components";

import TeyVatHomeButtonImageFile from "../utils/images/teyvat/teyvatHomeBtn.png";
import TeyVatAnimationEffect from "../utils/images/teyvat/animEffect.png";
import ButtonArrowButtonBack from "../utils/images/teyvat/bottomArrow.png";

const TeyVatHomeButton = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <BottomArrow src={ButtonArrowButtonBack} />
    </Wrapper>
  );
};

const ButtonAnimation = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1.5);
    opacity: 0.8;
  }
`;
const BottomArrowAnimation = keyframes`
  0% {
  }
  100% {
    transform: translateY(100%);
  }
`;
const Wrapper = styled.div`
  cursor: pointer;
  user-select: none;
  position: absolute;
  left: 50%;
  bottom: 8vh;
  width: 52px;
  height: 52px;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${TeyVatHomeButtonImageFile});
  background-size: 100% 100%;
  background-position: center;
  &::before {
    content: "";
    position: absolute;
    width: 52px;
    height: 52px;
    background-image: url(${TeyVatAnimationEffect});
    background-size: 100% 100%;
    background-position: center;
    animation: 1s ${ButtonAnimation} linear infinite;
  }
`;
const BottomArrow = styled.img`
  width: 25px;
  height: 13px;
  background-image: url(${TeyVatAnimationEffect});
  background-size: 100% 100%;
  background-position: center;
  transform: translateY(50%);
  animation: 0.8s ${BottomArrowAnimation} linear infinite alternate;
`;
export default TeyVatHomeButton;
