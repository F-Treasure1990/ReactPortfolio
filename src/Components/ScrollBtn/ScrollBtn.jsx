import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ScrollTopBtn from "../../icons/ScrollTopBtn";
import { FlexCenter } from "../../styles/GlobalStyles";

const ScrollBtnContainer = styled(motion.div)`
  cursor: pointer;
  width: 80px;
  min-height: 62px;
  ${FlexCenter}
  margin: 0 0 0 auto;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.16);
  transition: box-shadow 0.3s ease, margin 0.3s ease;
  padding: 12px;
  overflow: hidden;

  ${({ theme }) => theme?.mediaQ.customDown(450)} {
    margin-right: 12px;
  }
`;

const ScrollBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <ScrollBtnContainer onClick={scrollToTop}>
      <ScrollTopBtn />
    </ScrollBtnContainer>
  );
};

export default ScrollBtn;
