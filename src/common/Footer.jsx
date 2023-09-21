import React from "react";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333333;
  color: white;
  padding: 10px;
  text-align: center;
  margin-top: 2rem;
`;

const SocialIcons = styled.div`
  font-size: 24px;
  margin-bottom: 20px;

  svg {
    margin: 0 10px;
    transition: color 0.3s ease;
  }

  svg:nth-child(1):hover {
    color: red;
  }

  svg:nth-child(2):hover {
    color: black;
  }

  svg:nth-child(3):hover {
    color: #e2254f;
  }

  svg:nth-child(4):hover {
    color: blue;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;

  li {
    margin: 5px 0;
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <AiFillYoutube />
        <RiTwitterXFill />
        <AiOutlineInstagram />
        <AiFillFacebook />
      </SocialIcons>
      <FooterList>
        <li>Privacy & Policy</li>
        <li>Terms & Conditions</li>
      </FooterList>
      <CopyrightText>Gallery -  All about Nature</CopyrightText>
      <CopyrightText>&copy; 2023 Created by Blessing Dawodu</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;