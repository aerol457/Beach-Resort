import React, { useContext } from "react";

import "./RoomList.css";
import Room from "../Room/Room";
import { RoomsContext } from "../../context";

const RoomList = () => {
  const contextRooms = useContext(RoomsContext);

  return (
    <div className="room-list">
      <div className="room-list-content">
        {contextRooms.sortedRooms.length > 0 ? (
          contextRooms.sortedRooms.map((room, index) => (
            <Room
              key={index}
              title={room.name}
              btnLink={room.slug}
              price={room.price}
              images={room.images}
            />
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              margin: 0,
              fontWeight: "bold ",
              fontSize: 24,
            }}
          >
            Unfortunately No Rooms Matched Your Search Parameters
          </p>
        )}
      </div>
    </div>
  );
};

export default RoomList;
