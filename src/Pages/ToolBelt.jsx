import { SectionDivider, SectionSubTitle, SectionTitle, Text } from "styles/GlobalStyles";
import {
  ToolBeltContainer,
  ToolBeltCategory,
  ToolBeltOptionsContainer,
  ToolBeltCategoriesContainer
} from "Components/ToolBeltSection/ToolBeltStyles";
import { useState } from "react";
import ToolBeltOption from "Components/ToolBeltSection/ToolBeltOption/ToolBeltOption";
import frontend from "Data/Toolbelt/front-end.json";
import backend from "Data/Toolbelt/back-end.json";
import design from "Data/Toolbelt/utilities";
import { AnimatePresence, motion } from "framer-motion";
import SubNav from "Components/SubNav/SubNav";

const v = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Toolbelt = () => {
  const { frontendTools } = frontend;
  const { backendTools } = backend;
  const { designTools } = design;
  const [toolkitOption, setToolkitOption] = useState({
    category: frontendTools,
    selected: "frontend"
  });

  return (
    <>
      <SubNav />
      <ToolBeltContainer>
        <SectionTitle color="textFocused">toolbelt</SectionTitle>
        <SectionSubTitle color="accent">an array of tools i have confidence in </SectionSubTitle>
        <SectionDivider />
        <ToolBeltCategoriesContainer>
          <ToolBeltCategory
            h="50px"
            className={toolkitOption.selected === "frontend" && "selected"}
            onClick={() => setToolkitOption({ category: frontendTools, selected: "frontend" })}
          >
            <Text color="textFocused">Front-End</Text>
          </ToolBeltCategory>

          <ToolBeltCategory
            h="50px"
            className={toolkitOption.selected === "backend" && "selected"}
            onClick={() => setToolkitOption({ category: backendTools, selected: "backend" })}
          >
            <Text color="textFocused">Back-End</Text>
          </ToolBeltCategory>

          <ToolBeltCategory
            h="50px"
            className={toolkitOption.selected === "design" && "selected"}
            onClick={() => setToolkitOption({ category: designTools, selected: "design" })}
          >
            <Text color="textFocused">Design / Utilities</Text>
          </ToolBeltCategory>
        </ToolBeltCategoriesContainer>
        {/* Options */}
        <ToolBeltOptionsContainer>
          <motion.div variants={v} animate="show" initial="hidden">
            <AnimatePresence layout>
              {toolkitOption.category.map((t, i) => (
                <ToolBeltOption tool={t} key={`${t}-${i}`} layoutId={`${t}-${i}`} />
              ))}
            </AnimatePresence>
          </motion.div>
        </ToolBeltOptionsContainer>
      </ToolBeltContainer>
    </>
  );
};

export default Toolbelt;
