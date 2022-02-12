import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { FlexCenter } from "styles/GlobalStyles";

export const ConstructionMainContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme?.palette?.secondary};
  z-index: 1000;
  border: 2px solid #f1fa8c;
  border-radius: 6px;
  ${FlexCenter}
  background-image: url("underConProjectMain.png");
  background-repeat: no-repeat;
  background-position: center center;
  flex-direction: column;
  > p {
    color: #f1fa8c;
    font-size: 24px;
  }
`;

export const ConstructionMainDP = styled.div`
  height: 140px;
  width: 140px;
  border: 2px solid #f1fa8c;
  border-radius: 100%;
  padding: 4px;
  margin-bottom: 8px;
`;

const animation = {
  a: { opacity: 1 },
  i: { opacity: 0 }
};

const UnderConstructionMain = () => {
  return (
    <ConstructionMainContainer variants={animation} initial="i" animate="a" exit="i">
      <ConstructionMainDP>
        <img src="DisplayPics/avatar_thumbs_down.png" alt="under construction" />
      </ConstructionMainDP>
    </ConstructionMainContainer>
  );
};

export default UnderConstructionMain;
