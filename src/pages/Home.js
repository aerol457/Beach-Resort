import React from "react";

import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Sevices from "../components/ServicesRoom/Services";
import FeaturedRooms from "../components/FeaturedRooms/FeaturedRooms";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subTitle="Deluxe Rooms Starting At $299"
          buttonTitle="OUR ROOMS"
          buttonLink="/rooms"
        />
      </Hero>
      <Sevices />
      <FeaturedRooms />
    </>
  );
};

export default home;
