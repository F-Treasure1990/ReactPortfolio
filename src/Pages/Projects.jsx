import SubNav from "Components/SubNav/SubNav";
import React from "react";
import { useSelector } from "react-redux";
import projectsData from "Data/projectsData.json";
import {
  ProjectsCardsContainer,
  ProjectsContainer
} from "Components/ProjectsSection/ProjectsStyles";
import { SectionDivider, SectionSubTitle, SectionTitle } from "styles/GlobalStyles";
import ProjectCard from "Components/ProjectsSection/ProjectCard/ProjectCard";
import ProjectNav from "Components/ProjectsSection/ProjectNav/ProjectNav";

const Projects = () => {
  const { cards } = projectsData;

  const { projectCounter: isActive } = useSelector(state => state.ToggleSlice);
  // const { cards } = projectsData;
  const filteredArray = cards.slice(0, Math.floor(cards.length / 2));
  return (
    <>
      <SubNav />
      <ProjectsContainer>
        <SectionTitle color="textFocused">Projects</SectionTitle>
        <SectionSubTitle color="accent">
          some projects I have developed / contributed too
        </SectionSubTitle>
        <SectionDivider />
        <ProjectsCardsContainer>
          <ProjectCard card={cards[isActive === 0 ? 0 : isActive + isActive]} />
          <ProjectCard card={cards[isActive === 0 ? 0 + 1 : isActive + (isActive + 1)]} />
          <ProjectNav filteredArray={filteredArray} />
        </ProjectsCardsContainer>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
