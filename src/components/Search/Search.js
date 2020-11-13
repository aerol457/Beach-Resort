import React, { useContext } from "react";

import "./Search.css";
import Title from "../Title/Title";
import { RoomsContext } from "../../context";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const Search = () => {
  const context = useContext(RoomsContext);

  let types = getUnique(context.rooms, "type");
  types = ["all", ...types];
  types = types
    .sort()
    .map((type, index) => <option key={index}>{type}</option>);

  let capacity = getUnique(context.rooms, "capacity");
  capacity = capacity
    .sort(function (a, b) {
      return a - b;
    })
    .map((quantity, index) => <option key={index}>{quantity}</option>);
  return (
    <div className="search">
      <Title>Search Rooms</Title>
      <div className="search-input">
        <div className="form-group">
          <label>Room Type</label>
          <select
            name="roomType"
            value={context.roomType}
            onChange={(event) => context.onFilterRooms(event)}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label>Guests</label>
          <select
            name="capacity"
            value={context.capacity}
            onChange={(event) => context.onFilterRooms(event)}
          >
            {capacity}
          </select>
        </div>
        <div className="form-group">
          <label>Room Price ${context.price}</label>
          <input
            type="range"
            value={context.price}
            min={context.minPrice}
            max={context.maxPrice}
            name="price"
            onChange={(event) => context.onFilterRooms(event)}
          />
        </div>
        <div className="form-group-size">
          <label>Room Size</label>
          <br />
          <input
            type="number"
            value={context.minSize}
            name="minSize"
            onChange={(event) => context.onFilterRooms(event)}
          />
          <input
            type="number"
            value={context.maxSize}
            name="maxSize"
            onChange={(event) => context.onFilterRooms(event)}
          />
        </div>
        <div className="form-group-checkbox">
          <div>
            <input
              type="checkbox"
              value={context.breakfast}
              checked={context.breakfast}
              name="breakfast"
              onChange={(event) => context.onFilterRooms(event)}
            />
            <label>Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              value={context.pets}
              checked={context.pets}
              onChange={(event) => context.onFilterRooms(event)}
            />
            <label>Pets</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
