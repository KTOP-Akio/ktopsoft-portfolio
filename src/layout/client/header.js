import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// import { Link } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import { hideFooter, showFooter } from "../../redux/layoutSlice";

import MarkImageFile from "../../utils/images/public/mark.png";
import MusicSwitchImageFile from "../../utils/images/public/music_on_off_btn.png";
import UserIcoImageFile from "../../utils/images/public/userIco.png";
const DownloadImageFile =
  "https://webstatic.hoyoverse.com/upload/event/2020/11/06/097f419d5e84de22dd46463e4e7bff8c_6384289011155822242.png";

const navArray = [
  // {
  //   text: "HOME",
  //   link: "/"
  // },
  // {
  //   text: "NEWS",
  //   link: "/news"
  // },
  // {
  //   text: "MEMBERS",
  //   link: "/member"
  // },
  {
    text: "PORTFOLIO",
    link: "/"
  },
  // {
  //   text: "WebGL",
  //   link: "/webgl"
  // },
  // {
  //   text: "TOP-UP",
  //   link: "#"
  // },
  // {
  //   text: "REDEEM CODE",
  //   link: "#"
  // },
];

const Header = () => {
  const [currentNav, setCurrentNav] = useState(0);

  useEffect(() => {
    let pathname = window.location.href;
    let i;
    for (i = navArray.length - 1; i >= 0; i--)
      if (pathname.startsWith(navArray[i].link, 21)) break;
    setCurrentNav(i);
  }, []);

  const handleClick = (index) => {
    setCurrentNav(index);
  };

  return (
    <Container>
      <Wrapper>
        <NavbarContainer>
          <LogoContainer>
            {/* <MusicSwitchButton>
              <MusicSwitchButtonImg src={MusicSwitchImageFile} />
            </MusicSwitchButton> */}
            <Logo src={MarkImageFile} />
          </LogoContainer>
          <NavbarWrapper>
            {navArray.map((item, index) => (
              <NavbarItem
                active={index === currentNav ? "true" : "false"}
                key={index}
                onClick={() => handleClick(index)}
                href={item.link}
              >
                {item.text}
              </NavbarItem>
            ))}
            {/* <NavbarItemHoverLine /> */}
          </NavbarWrapper>
        </NavbarContainer>
        <LoginContainer>
          {/* <LoginWrapper>
            <LogInButton>Log In</LogInButton>
            <UserIcoImage src={UserIcoImageFile} />
          </LoginWrapper>
          <StyledButton
            bkimage={DownloadImageFile}
            mwidth="200px"
            mheight="66px"
            // manimation={``}
          /> */}
        </LoginContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  user-select: none;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 66px;
  background-color: rgba(17, 17, 17, 0.75);
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.35);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
`;
const NavbarContainer = styled.div`
  display: flex;
  gap: 5px;
`;
const LogoContainer = styled.div`
  position: relative;
  display: flex;
  padding-left: 70px;
  gap: 20px;
`;
const Logo = styled.img`
  cursor: pointer;
  height: 60px;
`;
const MusicSwitchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MusicSwitchButtonImg = styled.img`
  width: 30px;
  height: 30px;
`;
const NavbarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 66px;
  // margin-left: -58px;
`;
const NavbarItem = styled.a`
  margin: 0px 15px;
  text-decoration: none;
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  color: #ccc;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
    color: #fff;
    border-top: 5px solid rgb(105, 224, 255);
    transition: all 0.2s ease-in-out 0s;
  }
  ${(props) =>
    props.active === "true" &&
    `
      color: #fff;
      text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
      border-top: 5px solid rgb(105, 224, 255);
  `}
`;
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 66px;
`;
const LoginWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 18px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
const LogInButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  color: #ccc;
`;
const UserIcoImage = styled.img`
  width: 27px;
  height: 27px;
`;
export default Header;
