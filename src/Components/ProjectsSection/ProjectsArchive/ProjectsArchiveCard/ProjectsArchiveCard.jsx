import { useTheme } from "styled-components";
import ArchiveFolder from "icons/ArchiveFolder";
import {
  ProjectsArchiveCardContainer,
  ArchiveProjectSubTitle,
  ArchiveProjectTitle
} from "./ProjectsArchiveCardStyles";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import UnderConstructionArchive from "Components/UnderConstruction/UnderConstructionArchive";

const ProjectsArchiveCard = ({ card }) => {
  const { palette } = useTheme();
  const [displayCon, setDisplayCon] = useState(false);
  const underConstruction = () => {
    setDisplayCon(!displayCon);
    setTimeout(() => {
      setDisplayCon(false);
    }, 1500);
  };
  return (
    <ProjectsArchiveCardContainer h="100%" onClick={underConstruction}>
      <AnimatePresence>{displayCon && <UnderConstructionArchive size="80px" />}</AnimatePresence>

      <ArchiveFolder d={20} c={palette?.accent} />
      <ArchiveProjectTitle color="textFocused">{card.title}</ArchiveProjectTitle>
      <ArchiveProjectSubTitle color="accent">
        {card.professional ? "professional" : "personal"} project
      </ArchiveProjectSubTitle>
    </ProjectsArchiveCardContainer>
  );
};

export default ProjectsArchiveCard;
