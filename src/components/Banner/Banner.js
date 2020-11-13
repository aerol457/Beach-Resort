import React from "react";
import { Link } from "react-router-dom";

import "./Banner.css";

const Banner = ({ title, subTitle, buttonTitle, buttonLink }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div className="line"></div>
      <p>{subTitle}</p>
      <Link className="btn-primary" to={buttonLink}>
        {buttonTitle}
      </Link>
    </div>
  );
};

export default Banner;
