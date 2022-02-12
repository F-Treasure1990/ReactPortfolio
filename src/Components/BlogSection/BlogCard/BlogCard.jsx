import { useState } from "react";
import UnderConstructionArchive from "Components/UnderConstruction/UnderConstructionMain";
import {
  BlogCardContainer,
  BlogCardImg,
  BlogCardDate,
  BlogCardTextContainer,
  BlogCardTitle,
  BlogCardDescription
} from "./BlogCardStyles";

const BlogCard = ({ blog }) => {
  const [displayConstruction, setDisplayConstruction] = useState(false);

  const underConstruction = () => {
    setDisplayConstruction(!displayConstruction);
    setTimeout(() => {
      setDisplayConstruction(false);
    }, 1500);
  };
  return (
    <BlogCardContainer w="100%" h="auto" onClick={underConstruction}>
      {displayConstruction && <UnderConstructionArchive size={"120px"} />}
      <BlogCardImg
        src="ProjectsImages/project-5.png"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      />
      <BlogCardTextContainer>
        <BlogCardTitle color="textFocused">{blog.title}</BlogCardTitle>
        <BlogCardDate color="accent">{blog.postDate}</BlogCardDate>
        <BlogCardDescription color="text">{blog.description}</BlogCardDescription>
      </BlogCardTextContainer>
    </BlogCardContainer>
  );
};

export default BlogCard;
