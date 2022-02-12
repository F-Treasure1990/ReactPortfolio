import { ProjectCardImg, ProjectCardTopContainer } from "./ProjectTopStyles";

const Project_TopSection = ({ card }) => {
  return (
    <ProjectCardTopContainer>
      <ProjectCardImg
        className="Project_CardImg"
        src={`ProjectsImages/${card?.img}`}
        alt="Project image"
        loading="eager"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
      />
    </ProjectCardTopContainer>
  );
};

export default Project_TopSection;
