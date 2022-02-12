import { ColorPicker } from "Components/ColorPicker/ColorPicker";
import AvatarDP from "Components/InfoSection/TopSection/AvatarDP/AvatarDP";
import {
  BottomSectionContainer,
  Container,
  MiddleSectionContainer,
  TopSectionContainer
} from "Components/InfoSection/InfoSectionStyles";
import SocialMediaIcons from "Components/InfoSection/TopSection/SocialMediaIcons/SocialMediaIcons";
import Credentials from "Components/InfoSection/MiddleSection/Credentials/Credentials";
import AboutMe from "Components/InfoSection/BottomSection/AboutMe";

const Homepage = () => {
  return (
    <Container>
      {/* TOP SECTION */}
      <TopSectionContainer>
        <ColorPicker infosec={"true"} />
        <AvatarDP />
        <SocialMediaIcons />
      </TopSectionContainer>

      {/* MIDDLE SECTION */}
      <MiddleSectionContainer>
        <Credentials />
      </MiddleSectionContainer>

      {/*  BOTTOM SECTION */}
      <BottomSectionContainer>
        <AboutMe />
      </BottomSectionContainer>
    </Container>
  );
};

export default Homepage;
