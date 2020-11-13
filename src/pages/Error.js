import React from "react";

import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";

const error = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="404"
          subTitle="Page Not Found"
          buttonTitle="RETURN HOME"
          buttonLink="/"
        />
      </Hero>
    </div>
  );
};

export default error;
