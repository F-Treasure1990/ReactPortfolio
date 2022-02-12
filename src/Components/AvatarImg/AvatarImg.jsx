import { motion } from "framer-motion";
import styled from "styled-components";

export const AvatarImgStyles = styled(motion.img)`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  overflow: hidden;
`;

const AvatarImg = () => {
  const DPs = [
    "fist_bump",
    "laptop",
    "tongue",
    "smile",
    "fingerscrossed",
    "meditating",
    "thumbs_up",
    "peace",
    "wink",
    "pray"
  ];
  let randomDP = Math.floor(Math.random() * DPs.length);
  console.log(DPs[randomDP]);

  return <AvatarImgStyles loading="eager" src={`DisplayPics/avatar_${DPs[randomDP]}.png`} />;
};

export default AvatarImg;
