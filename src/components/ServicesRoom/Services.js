import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import "./Services.css";
import Article from "../Article/Article";
import Title from "../Title/Title";

const Services = () => {
  return (
    <div className="services">
      <Title>Services</Title>
      <div className="articles">
        <Article
          Logo={FaCocktail}
          title="Free Cocktails"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        />
        <Article
          Logo={FaHiking}
          title="Endless Hiking"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        />
        <Article
          Logo={FaShuttleVan}
          title="Free Shuttle"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        />
        <Article
          Logo={FaBeer}
          title="Strongest Beer"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
        />
      </div>
    </div>
  );
};

export default Services;
