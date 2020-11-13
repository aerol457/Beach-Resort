import React from "react";

import "./Title.css";

const Title = ({ children }) => {
  return (
    <div className="title-header">
      <h4 className="title">{children}</h4>
      <div className="line"></div>
    </div>
  );
};

export default Title;
