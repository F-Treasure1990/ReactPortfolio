import { motion } from "framer-motion";
import styled from "styled-components";

export const Project_CardTopContainer = styled.section`
  overflow: hidden;
  /* position: relative; */
  height: clamp(11.25rem, 10.2rem + 5.26vw, 12.5rem);
`;

export const Project_CardImg = styled(motion.img)`
  height: 100%;
  width: 100%;
  opacity: 0.8;
  transition: all ease 0.5s;
  object-fit: cover;
  object-position: top;
`;
