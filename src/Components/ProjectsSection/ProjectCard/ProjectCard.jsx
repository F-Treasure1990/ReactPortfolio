import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import UnderConstructionMain from "Components/UnderConstruction/UnderConstructionMain";

import Project_Main from "./ProjectCardMain/ProjectMain";
import { Project_CardContainer } from "./ProjectCardStyles";
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
      <Project_CardContainer h="max-content" onClick={underConstruction}>
        <AnimatePresence>{displayConstruction && <UnderConstructionMain />}</AnimatePresence>

        <ProjectTop card={card} />
        <Project_Main card={card} />
      </Project_CardContainer>
    </>
  );
};

export default ProjectCard;
