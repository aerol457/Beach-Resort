import React from "react";

import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Search from "../components/Search/Search";
import RoomList from "../components/RoomList/RoomList";

const rooms = () => {
  return (
    <div>
      <Hero hero="rooms-hero">
        <Banner
          title="Our Rooms"
          subTitle=""
          buttonTitle="RETURN HOME"
          buttonLink="/"
        />
      </Hero>
      <Search />
      <RoomList />
    </div>
  );
};

export default rooms;
