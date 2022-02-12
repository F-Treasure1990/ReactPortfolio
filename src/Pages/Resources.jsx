import Toggle from "Components/Toggle/Toggle";

import { SectionDivider, SectionSubTitle, SectionTitle } from "styles/GlobalStyles";
import { ResourcesContainer } from "Components/ResourcesSection/ResourcesStyles";
import ResourceOption from "Components/ResourcesSection/Resource_Option/Resource_Option";
import ResourceData from "Data/Resources/Resources.json";
import SubNav from "Components/SubNav/SubNav";

const Resources = () => {
  return (
    <>
      <SubNav />
      <ResourcesContainer>
        <SectionTitle color="textFocused">Resources</SectionTitle>
        <SectionSubTitle color="accent">useful resources i use most often</SectionSubTitle>
        <SectionDivider />
        {ResourceData.categories.map(category => (
          <ResourceOption category={category} key={category} />
        ))}
      </ResourcesContainer>
    </>
  );
};

export default Resources;
