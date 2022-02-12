import { useTheme } from "styled-components";
import BlogIcon from "icons/BlogIcon";
import {
  BlogArchiveCardContainer,
  BlogArchiveCardDate,
  BlogArchiveCardDescription,
  BlogArchiveCardTitle
} from "./BlogArchiveCardStyles";
import { useState } from "react";
import UnderConstructionArchive from "Components/UnderConstruction/UnderConstructionArchive";
import { AnimatePresence } from "framer-motion";

const BlogArchiveCard = ({ blog }) => {
  const { palette } = useTheme();
  const [displayCon, setDisplayCon] = useState(false);
  const underConstruction = () => {
    setDisplayCon(!displayCon);
    setTimeout(() => {
      setDisplayCon(false);
    }, 1500);
  };
  return (
    <>
      <BlogArchiveCardContainer h="100%" onClick={underConstruction}>
        <AnimatePresence>{displayCon && <UnderConstructionArchive size="120px" />}</AnimatePresence>
        <BlogIcon d={24} c={palette?.accent} />
        <BlogArchiveCardTitle color="textFocused">{blog.title}</BlogArchiveCardTitle>
        <BlogArchiveCardDate color="accent">{blog.postData}</BlogArchiveCardDate>
        <BlogArchiveCardDescription color="text">{blog.description}</BlogArchiveCardDescription>
      </BlogArchiveCardContainer>
    </>
  );
};

export default BlogArchiveCard;
