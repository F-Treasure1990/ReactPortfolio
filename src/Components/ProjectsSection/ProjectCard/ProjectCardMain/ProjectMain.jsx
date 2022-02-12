import { Text } from "styles/GlobalStyles";
import {
  ProjectDescriptionContainer,
  ProjectCardMainContainer,
  ProjectCardSubTitle,
  ProjectCardTitle
} from "./ProjectMainStyles";

const ProjectMain = ({ card }) => {
  return (
    <ProjectCardMainContainer>
      <ProjectCardTitle color="textFocused">{card.title}</ProjectCardTitle>
      <ProjectCardSubTitle>
        {card.professional ? "professional" : "personal"} project
      </ProjectCardSubTitle>
      <ProjectDescriptionContainer>
        <Text color="text">{card.description.substring(0, 180)}...</Text>
      </ProjectDescriptionContainer>
    </ProjectCardMainContainer>
  );
};

export default ProjectMain;
