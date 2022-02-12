import { motion } from "framer-motion";
import styled from "styled-components";
import { Box, Button, FlexCenter } from "styles/GlobalStyles";

export const ResourcesContainer = styled.section`
  /* margin-bottom: 20px; */
`;

export const ResourcesTableContainer = styled.div`
  margin-bottom: 12px;
  overflow: hidden;
  transition: margin ease;
`;

export const ResourcesTableTitle = styled(Box)`
  background-color: ${({ theme }) => theme?.palette?.main};
  color: ${({ theme }) => theme?.palette?.textFocused};
  padding: 12px 24px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  transition: margin ease 0.3s;
  cursor: pointer;
  user-select: none;
  font-size: clamp(0.88rem, 0.83rem + 0.24vw, 1rem);
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin: 0 12px;
  }

  > svg {
    transform: ${({ toggle }) => (toggle ? "rotate(270deg)" : "rotate(90deg)")};
    margin-right: 16px;
    transition: transform ease-out 0.5s, stroke ease 0.3s;
    stroke: ${({ theme }) => theme?.palette?.accent};
  }
`;

export const ResourceInfo = styled(motion.div)`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-gap: 16px;
  padding: 12px;
  overflow: hidden;
  transition: margin ease 0.3s;
  cursor: pointer;
  border: 1px solid transparent;
  border-bottom: 1px solid ${({ theme }) => theme?.palette?.main};

  :hover {
    border-bottom: 1px solid ${({ theme }) => theme?.palette?.accent};
    .title {
      color: ${({ theme }) => theme?.palette?.accent};
    }
  }

  ${({ theme }) => theme?.mediaQ.customDown(600)} {
    grid-template-columns: 30% 1fr;
  }
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    grid-template-columns: 37% 1fr;
    margin: 0 12px;
  }

  > .title {
    color: ${({ theme }) => theme?.palette?.textFocused};
    ${FlexCenter}
    font-weight: 300;
    font-size: clamp(0.88rem, 0.83rem + 0.24vw, 1rem);
    text-transform: capitalize;
    text-align: center;
    /* transition: color 0.3s ease; */
  }

  > .description {
    font-size: clamp(0.63rem, 0.53rem + 0.49vw, 0.88rem);
    font-weight: 300;
    color: ${({ theme }) => theme?.palette?.text};
  }

  > .linkIcon {
    ${FlexCenter};
    cursor: pointer;
  }
`;

export const ResourceToggleAll = styled(Button)`
  position: absolute;
`;
