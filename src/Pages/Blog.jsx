import SubNav from "Components/SubNav/SubNav";

import {
  SectionDivider,
  SectionSubTitle,
  SectionTitle,
  ArchiveSubTitle,
  ArchiveTitle,
  SectionSubDivider
} from "styles/GlobalStyles";
import { BlogCardsContainer } from "Components/BlogSection/BlogStyles";
import BlogCard from "Components/BlogSection/BlogCard/BlogCard";
import blogData from "Data/blogData.json";

import BlogArchiveCard from "Components/BlogSection/BlogArchive/BlogArchiveCard/BlogArchiveCard";

import {
  BlogArchiveCardsContainer,
  BlogArchiveContainer
} from "Components/BlogSection/BlogArchive/BlogArchiveStyles";

const Blog = () => {
  const { blogs } = blogData;
  return (
    <>
      <SubNav />
      <SectionTitle color="textFocused">blog</SectionTitle>
      <SectionSubTitle color="accent">Insight into my journey</SectionSubTitle>
      <SectionDivider />
      <BlogCardsContainer>
        {blogs.slice(0, 3).map((b, i) => (
          <BlogCard blog={b} key={`blog-${i}`} />
        ))}
      </BlogCardsContainer>
      <SectionSubDivider />
      <BlogArchiveContainer>
        <ArchiveTitle color="textFocused">blog archive</ArchiveTitle>
        <ArchiveSubTitle color="accent">Collection of interesting reads</ArchiveSubTitle>
        <BlogArchiveCardsContainer>
          {blogs.map((b, i) => (
            <BlogArchiveCard key={`blog-${i}`} blog={b} />
          ))}
        </BlogArchiveCardsContainer>
      </BlogArchiveContainer>
    </>
  );
};

export default Blog;
