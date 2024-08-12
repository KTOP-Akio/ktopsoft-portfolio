import React from "react";
import styled, { keyframes } from "styled-components";

import TeyVatGeneralButtonImageFile from "../utils/images/teyvat/teyvatGeneralBtn.png";
import TeyVatAnimationEffect from "../utils/images/teyvat/animEffect.png";
//  onClick={props.onClick}>
const TeyVatGeneralButton = (props) => {
  return (
    <Wrapper onClick={props.handleClick}>
      <Button />
      <ButtonText>View Details</ButtonText>
    </Wrapper>
  );
};

const ButtonAnimation = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(2.5);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 15px;
`;
const ButtonText = styled.div`
  font-size: 14px;
  color: white;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${TeyVatGeneralButtonImageFile});
  background-size: 100% 100%;
  background-position: center;
  &::before {
    content: "";
    width: 52px;
    height: 52px;
    background-image: url(${TeyVatAnimationEffect});
    background-size: 100% 100%;
    background-position: center;
    animation: 1s ${ButtonAnimation} linear infinite;
  }
`;
export default TeyVatGeneralButton;
