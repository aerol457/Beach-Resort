import React from "react";

import "./Hero.css";

const Hero = ({ hero, children }) => {
  return <header className={hero}>{children}</header>;
};

export default Hero;

Hero.defaultProps = {
  hero: "default-hero",
};
