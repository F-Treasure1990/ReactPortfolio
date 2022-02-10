import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  width: 45px;
`;

const LoaderCircle = styled(motion.div)`
  height: 60px;
  aspect-ratio: 1/1;
  background-color: ${({ theme }) => theme?.palette?.accent};
  border-radius: 100%;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderCircle initial={{ opacity: 1, scale: 0 }} animate={{ scale: 1, opacity: 0 }} transition={{ repeat: Infinity, repeatType: "loop", ease: "easeInOut", duration: 0.8, repeatDelay: 0.5 }} />
    </LoaderContainer>
  );
};

export default Loader;
