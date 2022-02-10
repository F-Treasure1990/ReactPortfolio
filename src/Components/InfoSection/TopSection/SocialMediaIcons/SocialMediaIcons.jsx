import { Container, MediaOption } from "./SocailMediaIconsStyles";

const SocialMediaIcons = () => {
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
    <>
      <Container>
        {MediaOptions.map((icon, index) => (
          <a href={mediaURl(icon)} target="_blank" rel="noreferrer" key={`${icon}=${index}`}>
            <MediaOption>
              <img src={`SocialMedia/${icon}.svg`} alt={`${icon}`} />
            </MediaOption>
          </a>
        ))}
      </Container>
    </>
  );
};

export default SocialMediaIcons;
