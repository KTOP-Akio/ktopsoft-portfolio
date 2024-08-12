import React from "react";
import styled from "styled-components";

import FaqIconFile from "../utils/images/public/faqIcon.gif";

const FaqItem = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <FaqIcon src={FaqIconFile} />
      <FaqContentWrapper>
        <FaqContentHeader>
          <FaqTitle>{props.title}</FaqTitle>
          <FaqTime>{props.date}</FaqTime>
        </FaqContentHeader>
        <FaqContent>{props.content}</FaqContent>
      </FaqContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 5px;
  gap: 12px;
  cursor: pointer;
  border-radius: 10px;
  user-select: none;

  &: hover {
    background-color: rgba(188, 188, 188, 0.2);
  }
`;
const FaqIcon = styled.img`
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const FaqContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FaqContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const FaqTitle = styled.div`
  color: #212b35;
  font-size: 14px;
  font-weight: 600;
`;
const FaqTime = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
const FaqContent = styled.div`
  color: #212b35;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;
export default FaqItem;
