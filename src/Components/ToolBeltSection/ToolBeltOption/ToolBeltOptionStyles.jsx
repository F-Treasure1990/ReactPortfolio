import { motion } from "framer-motion";
import styled from "styled-components";
import { Text } from "styles/GlobalStyles";

export const ToolBeltOptionContainer = styled(motion.div)`
  display: flex;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme?.palette?.secondary};
  }
  &:not(:last-child) .description {
    margin-bottom: 16px;
  }
`;

export const ToolBeltOptionImgContainer = styled.div`
  min-width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme?.palette?.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 16px;
  font-size: clamp(0.88rem, 0.77rem + 0.53vw, 1rem);
`;

export const ToolBeltOptionTitle = styled(Text)`
  font-size: clamp(0.88rem, 0.77rem + 0.53vw, 1rem);
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const ToolBeltOptionRightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  & .confidenceBarPercentageCon {
    display: flex;
    align-items: center;
    margin-top: -12px;
  }
  & .description {
    font-weight: 300;
    font-size: clamp(0.63rem, 0.41rem + 1.05vw, 0.88rem);
    margin-right: 55px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical;
    transition: all ease 0.5s;

    ${({ theme }) => theme?.mediaQ.customDown(450)} {
      margin-left: -50px;
      margin-right: 0;
      margin-top: 8px;
      -webkit-line-clamp: 4;
    }
  }
`;

export const ToolBeltOptionConfidenceBar = styled.div`
  display: flex;
  height: 4px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme?.palette?.secondary};
  width: 100%;

  & .confidenceBarPercentage {
    background-color: ${({ theme }) => theme?.palette?.accent};
    transition: background-color ease 0.3s;
  }
`;

export const ToolBeltOptionPercentage = styled(motion.div)`
  color: ${({ theme }) => theme?.palette?.accent};
`;
