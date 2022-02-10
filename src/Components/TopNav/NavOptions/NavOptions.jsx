import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Text } from "styles/GlobalStyles";
import {
  NavOptionContainer,
  NavOptionsContainer,
  NavOptionAnimation,
  NavOption
} from "./NavOptionsStyles";

const NavOptions = () => {
  const router = useLocation();
  const NavOptions = ["home", "projects", "toolbelt", "blog", "resources"];
  const [clicked, setClicked] = useState(
    router.pathname === "/" ? "home" : router.pathname.replace(/[^a-zA-Z ]/g, "")
  );

  //Framer variants
  const varants = {
    initial: { transform: "translate3d(-110%,0px,0px)" },
    active: {
      transform: "translate3d(0%,0px,0px)",
      transition: { type: "spring", damping: 8, mass: 0.8 }
    },
    exit: { transform: "translate3d(-110%,0px,0px)" }
  };

  return (
    <NavOptionsContainer>
      {NavOptions.map((option, index) => (
        <NavOptionContainer
          to={option === "home" ? "/" : `/${option}`}
          key={`${option}-${index}`}
          className="navOptionContainer"
          onClick={() => setClicked(option)}
          clicked={clicked === option ? "true" : ""}
        >
          <NavOption>
            <img
              className="navOption_icon"
              src={`TopNav/${option}.svg`}
              alt={`${option}`}
              style={{ stroke: "red", fill: "salmon" }}
            />
            <Text
              className="navOptionText"
              color={clicked === option ? "textFocused" : "text"}
              font="subtitle1"
            >
              {option}
            </Text>
            <AnimatePresence>
              {clicked === option && (
                <NavOptionAnimation>
                  <motion.div
                    className="animation"
                    variants={varants}
                    animate={clicked === option && "active"}
                    initial="initial"
                    exit="exit"
                  />
                </NavOptionAnimation>
              )}
            </AnimatePresence>
          </NavOption>
        </NavOptionContainer>
      ))}
    </NavOptionsContainer>
  );
};

export default NavOptions;
