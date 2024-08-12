import React, { useState } from "react";
import styled from "styled-components";
import {
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaDiscord,
  FaReddit,
  FaWhatsapp,
} from "react-icons/fa";
import LabledUpInput from "../../components/LabeledUpInput";
import Checkbox from "../../components/Checkbox";
import StyledButton from "../../components/StyledButton";

import MarkImageFile from "../../utils/images/public/mark.png";
import DownloadBrandImageFile from "../../utils/images/home/brand.png";
// import CompanyBrandImageFile from "../../utils/images/public/companyName.png";

const primaryColor = "#d3bc8e";
const subDetailTitle = "I am open to work for fully remote jobs";
const leftsideDetail = `I am available to global time zone and speak in English the most.`;
const Footer = () => {
  const [agreeChecked, setAgreeCheck] = useState(false);

  return (
    <Wrapper>
      <Container>
        <NavbarContainer>
          <NavbarItem href = "https://twitter.com/@YukiOno03">
            <FaTwitter />
          </NavbarItem>
          <NavbarItem href = "https://www.tiktok.com/@ktopsoft">
            <FaTiktok />
          </NavbarItem>
          <NavbarItem href = "https://www.youtube.com/@KTOPSOFT">
            <FaYoutube />
          </NavbarItem>
          <NavbarItem href = "https://www.facebook.com/YukiOno">
            <FaFacebook />
          </NavbarItem>
          <NavbarItem href = "https://www.instagram.com/yuki_ono_313">
            <FaInstagram />
          </NavbarItem>
          <NavbarItem href = "https://discord.gg/Nu9WTJrwpC">
            <FaDiscord />
          </NavbarItem>
          <NavbarItem href = "https://www.reddit.com/user/KTOPSOFT/">
            <FaReddit />
          </NavbarItem>
          <NavbarItem href = "">
            <FaWhatsapp />
          </NavbarItem>
        </NavbarContainer>
        <SubDetailWrapper>
          <SubDetailContainer>
            <LeftSideBar>
              <SubDetailTitle>{subDetailTitle}</SubDetailTitle>
              <LeftSideDetail>{leftsideDetail}</LeftSideDetail>
            </LeftSideBar>
            <RightSideBar>
              <LeftSideBar>
                <LabledUpInput required type="text" label="Email" id="email" />
                <LineWrapper>
                  <Checkbox
                    checked={agreeChecked}
                    setCheckedState={setAgreeCheck}
                  />
                  <Description>
                    I agree for my personal data to be collected and used to
                    receive event invitations and other game info. &nbsp;
                    <ColorDiv>Read details &gt;&gt;</ColorDiv>
                  </Description>
                </LineWrapper>
              </LeftSideBar>
              <StyledButton
                bkcolor="#cdbb98"
                color="#3b4354"
                bdradius="12px"
                mpadding="14px 16px"
                maxwidth="180px"
                minwidth="180px"
                mheight="fit-content"
              >
                Contact us
              </StyledButton>
            </RightSideBar>
          </SubDetailContainer>
        </SubDetailWrapper>
        <DetailWrapper>
          <DetailContainer>
            <MarkImage src={MarkImageFile} />
            <FooterNavbar>
              <FooterNavbarItem>Privacy Policy</FooterNavbarItem>
              <FooterNavbarItem>Teams of Service</FooterNavbarItem>
              <FooterNavbarItem>About Us</FooterNavbarItem>
              <FooterNavbarItem>Contact Us</FooterNavbarItem>
            </FooterNavbar>
            <DownloadBrand src={DownloadBrandImageFile} />
            <FooterDescription>
              I am trying to develop the most popular and famous products that
              can give happiness and laugh to people and will always be with
              thousand million of players all over the world
            </FooterDescription>
            <Description>Copyright © 2024. All Rights Reserved.</Description>
          </DetailContainer>
        </DetailWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 52px;
  background-color: #111111;
`;
const NavbarItem = styled.a`
  cursor: pointer;
  width: 100px;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
  & :hover {
    color: #aaa;
  }
`;
const SubDetailWrapper = styled.div`
  padding: 40px 0px;
  background-color: #111;
  border-top: 1px solid #323232;
`;
const SubDetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const LeftSideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 441px;
`;
const SubDetailTitle = styled.div`
  color: #e6e7e9;
  font-size: 28px;
  font-weight: 700;
  font-family: Tahoma, Helvetica, Arial, sans-serif !important;
`;
const LeftSideDetail = styled.div`
  color: #ccd0d2;
  font-size: 14px;
  font-family: Tahoma, Helvetica, Arial, sans-serif !important;
`;
const RightSideBar = styled.div`
  display: flex;
  gap: 25px;
  width: 700px;
`;
const LineWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
const Description = styled.div`
  color: white;
  font-size: 12px;
`;
const ColorDiv = styled.span`
  text-align: center;
  color: ${(props) => (props.fcolor ? props.fcolor : primaryColor)};
`;
const DetailWrapper = styled.div`
  width: 100%;
  background-color: black;
  gap: 50px;
  padding: 50px 0px;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const MarkImage = styled.img`
  width: auto;
  height: 40px;
`;
const FooterNavbar = styled.div`
  gap: 15px;
  display: flex;
`;
const FooterNavbarItem = styled.div`
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  color: #999;
  &: hover {
    color: white;
  }
`;
const DownloadBrand = styled.img`
  width: 200px;
  height: 127px;
`;
// const CompanyBrand = styled.img`
//   height: 50px;
//   cursor: pointer;
// `;
const FooterDescription = styled.div`
  text-align: center;
  color: #999;
  font-size: 12px;
`;
export default Footer;
