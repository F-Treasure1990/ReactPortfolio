import { motion } from "framer-motion";
import styled from "styled-components";
import { FlexCenter, Text } from "styles/GlobalStyles";

export const Title = styled(Text)`
  margin-bottom: 12px;
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    text-align: center;
  }
`;

export const Description = styled(motion.div)`
  color: ${({ theme }) => theme?.palette?.textFocused};
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;

  > span {
    transition: all ease 0.3s;
    color: ${({ theme }) => theme?.palette?.accent};
  }
  ${({ theme }) => theme?.mediaQ.customUp(750)} {
    height: max-content !important;
    margin-bottom: 12px;
  }
  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    text-align: center;
  }
`;

export const ReadMoreBtn = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: clamp(0.75rem, 0.44rem + 1.54vw, 0.88rem);
  ${FlexCenter}
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme?.palette?.accent};
  margin-top: clamp(1.25rem, 0.41rem + 4.21vw, 2.25rem);
  margin-bottom: 12px;
  cursor: pointer;
  ${({ theme }) => theme?.mediaQ.customUp(750)} {
    display: none;
  }
`;
// display: -webkit-box;
//   -webkit-line-clamp: 3;
//   overflow: hidden;
//   -webkit-box-orient: vertical;
