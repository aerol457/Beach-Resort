import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

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
    <>
      {room ? (
        <div>
          <StyledHero img={room.images[0]}>
            <Banner
              title="Single Economy Room"
              subTitle=""
              buttonTitle="BACK TO ROOMS"
              buttonLink="/rooms"
            />
          </StyledHero>
          <DetailsRoom room={room} />
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: 100 }}>
          <p style={{ fontWeight: "bold" }}>NO SUCH ROOM COULD BE FOUND...</p>
          <Link className="btn-primary" to="/rooms">
            BACK TO ROOMS
          </Link>
        </div>
      )}
    </>
  );
};

export default SingleRoom;
