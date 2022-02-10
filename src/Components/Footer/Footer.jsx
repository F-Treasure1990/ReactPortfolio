import React from "react";

import { useTheme } from "styled-components";
import Logo from "icons/Logo";
import { Section_Divider } from "styles/GlobalStyles";
import ScrollBtn from "Components/ScrollBtn/ScrollBtn";
import {
  Footer_Button,
  Footer_container,
  Footer_Description,
  Footer_LogoDividerContainer,
  Footer_TextContainer,
  Footer_Title
} from "./FooterStyles";

const Footer = () => {
  const { palette } = useTheme();

  return (
    <>
      <ScrollBtn />
      <Footer_container>
        <Footer_LogoDividerContainer>
          <Section_Divider />
          <div className="Footer_LogoContainer">
            <Logo size={40} color={palette.textFocused} />
          </div>
          <Section_Divider />
        </Footer_LogoDividerContainer>
        <Footer_TextContainer>
          <Footer_Title>get in touch!</Footer_Title>
          <Footer_Description color="textFocused">
            My aim is to connect with the developer community and explore any opportunities that
            comes with that. Please do not hesitate to message me and I will try my best to get back
            to you ASAP 👊🏽
          </Footer_Description>
          <a href="mailto:fentontreasure@gmail.com">
            <Footer_Button>message</Footer_Button>
          </a>
        </Footer_TextContainer>
      </Footer_container>
    </>
  );
};

export default Footer;
