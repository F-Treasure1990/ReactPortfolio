import { motion } from "framer-motion";
import { Text } from "styles/GlobalStyles";
import {
  ToolBeltOptionConfidenceBar,
  ToolBeltOptionContainer,
  ToolBeltOptionImgContainer,
  ToolBeltOptionPercentage,
  ToolBeltOptionRightSideContainer,
  ToolBeltOptionTitle
} from "./ToolBeltOptionStyles";

const v = {
  hidden: { x: "-120%" },
  show: { x: 0, transition: { type: "spring", bounce: 0.2 } }
};
const ToolBeltOption = ({ tool }) => {
  return (
    <ToolBeltOptionContainer variants={v}>
      <ToolBeltOptionImgContainer>
        <img src={`/ToolBelt/${tool?.software.replace(/ /g, "-")}-logo.svg`} alt={tool?.software} />
      </ToolBeltOptionImgContainer>
      {/* Title and Percentage bar */}
      <ToolBeltOptionRightSideContainer>
        <ToolBeltOptionTitle color="textFocused">{tool?.software}</ToolBeltOptionTitle>

        <div className="confidenceBarPercentageCon">
          <ToolBeltOptionConfidenceBar>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${tool?.confidence}%` }}
              transition={{ type: "tween", duration: 1 }}
              className="confidenceBarPercentage"
            />
          </ToolBeltOptionConfidenceBar>
          <ToolBeltOptionImgContainer>
            <ToolBeltOptionPercentage initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {tool?.confidence}
            </ToolBeltOptionPercentage>
          </ToolBeltOptionImgContainer>
        </div>

        <Text color="text" className="description">
          {tool?.description}
        </Text>
      </ToolBeltOptionRightSideContainer>
    </ToolBeltOptionContainer>
  );
};

export default ToolBeltOption;
