import React from "react";

import { useTheme } from "styled-components";
import Logo from "icons/Logo";
import { SectionDivider } from "styles/GlobalStyles";
import ScrollBtn from "Components/ScrollBtn/ScrollBtn";
import {
  FooterButton,
  Footercontainer,
  FooterDescription,
  FooterLogoDividerContainer,
  FooterTextContainer,
  FooterTitle
} from "./FooterStyles";

const Footer = () => {
  const { palette } = useTheme();

  return (
    <>
      <ScrollBtn />
      <Footercontainer>
        <FooterLogoDividerContainer>
          <SectionDivider />
          <div className="FooterLogoContainer">
            <Logo size={40} color={palette.textFocused} />
          </div>
          <SectionDivider />
        </FooterLogoDividerContainer>
        <FooterTextContainer>
          <FooterTitle>get in touch!</FooterTitle>
          <FooterDescription color="textFocused">
            My aim is to connect with the developer community and explore any opportunities that
            comes with that. Please do not hesitate to message me and I will try my best to get back
            to you ASAP 👊🏽
          </FooterDescription>
          <a href="mailto:fentontreasure@gmail.com">
            <FooterButton>message</FooterButton>
          </a>
        </FooterTextContainer>
      </Footercontainer>
    </>
  );
};

export default Footer;
