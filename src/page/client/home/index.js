import React from "react";
import styled from "styled-components";
import HomePost from "./HomePost";
import HomeNews from "./HomeNews";
import HomeGameLink from "./HomeGameLink";
// import "./fonts.css";

const HomePage = () => {
  return (
    <Wrapper>
      <Container>
        <HomePost />
        <HomeNews />
        <HomeGameLink />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Container = styled.div`
  min-width: 1400px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default HomePage;
