import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { FlexCenter } from "styles/GlobalStyles";

export const Construction_ArchiveContainer = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme?.palette?.secondary};
  z-index: 1000;
  border: 1px solid #f1fa8c;
  border-radius: inherit;
  background-repeat: no-repeat;
  background-position: center center;
  ${FlexCenter}
`;

export const Construction_ArchiveDP = styled.div`
  height: ${({ size }) => size};
  aspect-ratio: 1/1;
  border: 2px solid #f1fa8c;
  border-radius: 100%;
  padding: 4px;
`;

const animation = {
  a: { opacity: 1 },
  i: { opacity: 0 }
};

const UnderConstructionArchive = ({ size }) => {
  return (
    <Construction_ArchiveContainer variants={animation} initial="i" animate="a" exit="i">
      <Construction_ArchiveDP size={size}>
        <img src="DisplayPics/avatar_thumbs_down.png" alt="under construction" />
      </Construction_ArchiveDP>
    </Construction_ArchiveContainer>
  );
};

export default UnderConstructionArchive;
