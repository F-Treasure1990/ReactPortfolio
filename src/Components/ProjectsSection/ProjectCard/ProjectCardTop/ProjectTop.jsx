import { Project_CardImg, Project_CardTopContainer } from "./ProjectTopStyles";

const Project_TopSection = ({ card }) => {
  return (
    <Project_CardTopContainer>
      <Project_CardImg
        className="Project_CardImg"
        src={`ProjectsImages/${card?.img}`}
        alt="Project image"
        loading="eager"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
      />
    </Project_CardTopContainer>
  );
};

export default Project_TopSection;
