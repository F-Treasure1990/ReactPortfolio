import AvatarImg from "../AvatarImg/AvatarImg";
import { ColorPicker } from "../ColorPicker/ColorPicker";

import {
  SubNavColorPickerContainer,
  SubNavContainer,
  SubNavDP,
  SubNavSocialMediaContainer,
  SubNavSocialMediaOption
} from "./SubNavStyles";

const SubNav = () => {
  const MediaOptions = ["instagram", "linkedin", "github"];

  const mediaURl = media => {
    if (media === "instagram") {
      return "https://www.instagram.com/";
    } else if (media === "linkedin") {
      return "https://gb.linkedin.com/";
    } else if (media === "github") {
      return "https://github.com/F-Treasure1990";
    }
  };
  return (
    <SubNavContainer>
      <SubNavColorPickerContainer>
        <ColorPicker useMargin={false} />
      </SubNavColorPickerContainer>
      <SubNavDP>
        <AvatarImg />
      </SubNavDP>

      <SubNavSocialMediaContainer>
        {MediaOptions.map((icon, index) => (
          <a href={mediaURl(icon)} target="blank" rel="noreferrer" key={`${icon}=${index}`}>
            <SubNavSocialMediaOption>
              <img src={`SocialMedia/${icon}.svg`} alt={`${icon}`} />
            </SubNavSocialMediaOption>
          </a>
        ))}
      </SubNavSocialMediaContainer>
    </SubNavContainer>
  );
};
export default SubNav;
