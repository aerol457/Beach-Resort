import React from "react";

import "./DetailsRoom.css";

const DetailsRoom = ({ room }) => {
  return (
    <div className="details-room">
      <div className="details-room-img">
        {room.images.map((img, index) => {
          if (index === 0) {
            return null;
          }
          return <img key={index} src={img} alt="room" />;
        })}
      </div>
      <div className="details-room-content">
        <div>
          <h2>Details</h2>
          <p>{room.description}</p>
        </div>
        <div className="details-room-info">
          <h2>Info</h2>
          <p>Price : {room.price}</p>
          <p>Size : {room.size} SQFT</p>
          <p>Max Capacity :{room.capacity} Person</p>
          <p>{!room.pets && <span>No</span>} Pets Allowed</p>
          {room.breakfast && <p>Free Breakfast Included</p>}
        </div>
      </div>
      <div className="details-room-extras-content">
        <h4>Extras</h4>
        <div className="details-room-extras">
          {room.extras.extrasArray.map((extra, index) => (
            <p key={index}>- {extra}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsRoom;
