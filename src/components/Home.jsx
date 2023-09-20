import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";

const HomePageContainer = styled.div`
  text-align: center;
  font-family: 'Recursive', sans-serif;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 0.4rem 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: 420px) {
    margin-bottom: 5rem;
  }


`;

const Title = styled.h2`
  margin-left: 2rem;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #ff5722;
  }
`;

const HeroSection = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;

   @media (max-width: 420px) {
     top: 30%;
   }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0.5rem 0 0.2rem;

   @media (max-width: 420px) {
     font-size: 1.8rem;
   }
`;

const HeroText = styled.p`
  font-size: 1.6rem;
  margin: 0.2rem 0 1rem;

   @media (max-width: 420px) {
     font-size: 1rem;
   }
`;

const Home = () => {

  const linkStyle = {
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    padding: "0.7rem 1.5rem",
    marginTop: "1rem",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: "5px",
  };

  return (
    <HomePageContainer>
      <Header>
        <Title>Gallery</Title>
        <Link to="/signup" style={{marginRight: "2rem", marginBottom: "0.3rem", padding: "0.7rem 1.5rem", color: "#fff", backgroundColor: "#ff5722", textDecoration: "none", borderRadius: "5px", fontSize: "1rem"}}>Sign Up</Link>
      </Header>
      <HeroSection>
        <ImageSlider />
        <HeroContent>
          <HeroTitle>Welcome to our Gallery</HeroTitle>
          <HeroText>Explore the beauty of nature through our stunning photos.</HeroText>
          <Link to="/login" style={linkStyle}>Log in</Link>
        </HeroContent>
      </HeroSection>
    </HomePageContainer>
  );
};

export default Home;

