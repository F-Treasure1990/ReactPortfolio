import styled from "styled-components";
import { FlexCenter, Box, Button } from "styles/GlobalStyles";

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: all 0.5s ease-out;
  z-index: 1000;
  font-weight: 300;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    position: fixed;
    bottom: 0;
    outline: 10px solid ${({ theme }) => theme?.palette?.secondary};
    border-radius: 0;
  }

  // LOGO
  & > svg {
    margin-left: max(2.4%, 12px);
    margin-right: 12px;
    transition: all 0.6s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    ${({ theme }) => theme?.mediaQ.customDown(500)} {
      /* margin-left: -34px; */
      display: none;
    }

    :hover {
      transform: rotate(180deg);
    }
  }
`;

export const MessageButton = styled(Button)`
  ${FlexCenter}

  min-width: 50px;
  border-radius: 6px;
  height: 40px;
  overflow: hidden;
  margin-right: 12px;
  font-size: 14px;
  transition: all 0.5s ease-out;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    display: none;
  }
  /* & > .messageText {
    transition: all 0.5s ease-out;
    font-weight: 400;
    ${({ theme }) => theme?.mediaQ.customDown(750)} {
      margin-right: -94px;
      padding: 8px;
    }
  }
  & > .icon {
    min-width: 16px;
    min-height: 16px;
  } */
`;
