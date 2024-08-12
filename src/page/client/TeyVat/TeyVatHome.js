import React from "react";
import styled from "styled-components";

import TeyVatHomeBackgroundFile from "../../../utils/images/teyvat/homeBack.png";
import TitleHrImageFile from "../../../utils/images/teyvat/titleHr.png";
import TeyVatHomeButton from "../../../components/TeyvatHomeButton";

const TeyVatHome = (props) => {
  return (
    <Wrapper ref={props.refProps}>
      <Container>
        <Title>Yuki Ono</Title>
        <TitleHr src={TitleHrImageFile} />
        <Description>
        I'm a seasoned freelance software developer, technical manager with over 9 years of professional experience. I have built many complex world-class software products from start to finish, spanning numerous platforms. I have worked both individually and as a group leader. I'm active within the games industry with a knack for novel and complex solutions and the ability to quickly integrate into any team and adapt to the problem at hand, whether it be the UI/UX, back end, or anything in between.As a professional developer focusing on game development, computer graphic, artificial intelligence, and client/server systems. I have also developed a variety of desktop and server applications in C# and Unity. I'm passionate about researching cutting-edge technology, creating real-time, high-performance software, and optimizing complex systems.I'm also a software engineer and developer who specializes in front-end and back-end solutions. I have good experience with mobile , desktop ,  2D/3D graphics games. I'm eager to learn and love to work on challenging projects.
        </Description>
        <CheckoutButton>Check out my previous experiences</CheckoutButton>
      </Container>
      <TeyVatHomeButton onClick={props.onButtonDownClick} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${TeyVatHomeBackgroundFile});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;
const Container = styled.div`
  max-width: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  height: 120px;
  font-size: 80px;
  font-weight: 400;
  font-family: LilitaOne;
  text-shadow: 0 0 17px rgba(110, 159, 193, 0.24),
    0 0 17px rgba(110, 159, 193, 0.24);
  color: white;
`;
const TitleHr = styled.img`
  width: auto;
  height: 21px;
  margin: auto;
  margin-bottom: 30px;
`;
const Description = styled.div`
  text-align: center;
  font-size: 19px;
  font-weight: bold;
  text-shadow: 0 0 12px rgba(110, 159, 193, 0.36),
    0 0 12px rgba(110, 159, 193, 0.36);
  line-height: 1.8;
  color: white;
  font-family: Tahoma, Helvetica, Arial, sans-serif !important;
  margin-bottom: 20px;
`;
const CheckoutButton = styled.div`
  text-align: center;
  width: 100%;
  line-height: 34px;
  font-size: 18px;
  color: #fff;
  text-shadow: 0 0 12px rgba(47, 125, 178, 0.45),
    0 0 12px rgba(47, 125, 178, 0.45);
  // background:  center no-repeat;
  background-color: rgba(127, 127, 127, 0.2);
  background-size: cover;
  user-select: none;
  cursor: pointer;
`;
export default TeyVatHome;
