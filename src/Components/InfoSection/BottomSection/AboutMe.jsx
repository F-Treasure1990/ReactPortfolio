import { useState } from "react";

import { Description, ReadMoreBtn, Title } from "./AboutMeStyles";

const AboutMe = () => {
  const [readMore, setReadMore] = useState(false);
  const v = {
    i: { height: "auto" },
    a: { height: "10ch" }
  };

  return (
    <>
      <Title color="textFocused">Hi, 👋🏽 ...</Title>
      <Description
        variants={v}
        animate={readMore ? "i" : "a"}
        initial="i"
        transition={{ type: "spring" }}
      >
        Thank you for taking the time to explore my portfolio. My name is Fenton, and I am a{" "}
        <span>self-taught developer</span> located in the city of Birmingham, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿.
        Web-development has been my obsession for many years, exploring both front-end and back-end
        methodologies. I enjoy learning and experimenting with code, and I am seeking a working
        environment that will enable me to further develop my coding and professional skills, paired
        with opportunities to explore a multitude of different software. 🙏🏽
      </Description>

      <ReadMoreBtn onClick={() => setReadMore(!readMore)}>
        Read {readMore ? "less" : "more"}
      </ReadMoreBtn>
    </>
  );
};

export default AboutMe;
