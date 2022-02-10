import React from "react";
import { useTheme } from "styled-components";
import Logo from "icons/Logo";
import NavOptions from "./NavOptions/NavOptions";
import { Container, MessageButton } from "./TopNav_Styles";

const TopNav = () => {
  const { palette } = useTheme();
  return (
    <Container h="64px" w="100%">
      <Logo size="26" className="topnav_logo" color={palette?.textFocused} />
      <NavOptions />
      <a href="mailto:fentontreasure@gmail.com">
        <MessageButton solid>
          <img className="icon" src="TopNav/message.svg" alt="Message Icon" />
        </MessageButton>
      </a>
    </Container>
  );
};

export default TopNav;
