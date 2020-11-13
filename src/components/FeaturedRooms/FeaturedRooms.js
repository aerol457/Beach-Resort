import React, { useContext } from "react";

import "./FeaturedRooms.css";
import Title from "../Title/Title";
import Room from "../Room/Room";
import { RoomsContext } from "../../context";

const FeaturedRooms = () => {
  const roomsList = useContext(RoomsContext);

  return (
    <div className="featured-rooms">
      <Title>Featured Rooms</Title>
      <div className="rooms">
        {roomsList.featuredRooms.map((room, index) => {
          return (
            <Room
              key={index}
              title={room.name}
              btnLink={room.slug}
              price={room.price}
              images={room.images}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedRooms;
