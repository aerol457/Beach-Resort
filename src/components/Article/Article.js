import React from "react";

import "./Article.css";

const Article = ({ Logo, title, content }) => {
  return (
    <div className="article">
      <Logo className="article-logo" />
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
};

export default Article;
