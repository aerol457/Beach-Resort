import React from "react";
import { Link } from "react-router-dom";

import "./Room.css";

const Card = ({ btnLink, title, price, images }) => {
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${btnLink}`} className="btn-primary room-link">
          features
        </Link>
      </div>
      <p className="room-info">{title}</p>
    </article>
  );
};

export default Card;
