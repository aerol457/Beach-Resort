import React, { useEffect, useContext, useState } from "react";

import StyledHero from "../components/StyledHero/StyledHero";
import Banner from "../components/Banner/Banner";
import DetailsRoom from "../components/DetailsRoom/DetailsRoom";
import { RoomsContext } from "../context";

const SingleRoom = (props) => {
  const contextRooms = useContext(RoomsContext);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    setRoom(contextRooms.rooms.find((r) => r.slug === props.match.params.id));
  }, [props, room, contextRooms.rooms]);

  return (
    <div>
      {room && (
        <StyledHero img={room.images[0]}>
          <Banner
            title="Single Economy Room"
            subTitle=""
            buttonTitle="BACK TO ROOMS"
            buttonLink="/rooms"
          />
        </StyledHero>
      )}
      {room && <DetailsRoom room={room} />}
    </div>
  );
};

export default SingleRoom;
