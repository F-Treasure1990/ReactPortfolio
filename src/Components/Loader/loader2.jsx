import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  width: 45px;
  /* grid-gap: 8px; */
`;

const LoaderCube = styled(motion.div)`
  height: 15px;
  width: 15px;
  background-color: ${({ theme }) => theme?.palette?.accent};
`;

const Loader = () => {
  const cubeCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <LoaderContainer>
      {cubeCount.map((c, i) => (
        <LoaderCube key={`${c}-${i}`} initial={{ scale: 1 }} animate={{ scale: 0 }} transition={{ repeat: Infinity, repeatType: "reverse", ease: "easeInOut", duration: 0.5, delay: i * 0.3 }} />
      ))}
    </LoaderContainer>
  );
};

export default Loader;
