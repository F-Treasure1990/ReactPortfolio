import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import UnderConstructionMain from "Components/UnderConstruction/UnderConstructionMain";

import ProjectMain from "./ProjectCardMain/ProjectMain";
import { ProjectCardContainer } from "./ProjectCardStyles";
import ProjectTop from "./ProjectCardTop/ProjectTop";

const ProjectCard = ({ card }) => {
  const [displayConstruction, setDisplayConstruction] = useState(false);
  const underConstruction = () => {
    setDisplayConstruction(!displayConstruction);
    setTimeout(() => {
      setDisplayConstruction(false);
    }, 1500);
  };
  return (
    <>
      <ProjectCardContainer h="max-content" onClick={underConstruction}>
        <AnimatePresence>{displayConstruction && <UnderConstructionMain />}</AnimatePresence>

        <ProjectTop card={card} />
        <ProjectMain card={card} />
      </ProjectCardContainer>
    </>
  );
};

export default ProjectCard;
