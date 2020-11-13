import React, { useState, useEffect, useCallback } from "react";

import Client from "./Contentful";

export const RoomsContext = React.createContext({
  rooms: [],
  featuredRooms: [],
  sortedRooms: [],
  maxPrice: 0,
  minPrice: 0,
  price: 0,
  maxSize: 0,
  minSize: 0,
  roomType: "",
  capacity: 0,
  pets: false,
  breakfast: false,
  onFilterRooms: () => {},
});

const ProviderRooms = React.memo((props) => {
  const [rooms, setRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState({
    maxPrice: 0,
    minPrice: 0,
    price: 0,
    maxSize: 0,
    minSize: 0,
    roomType: "all",
    capacity: 0,
    pets: false,
    breakfast: false,
  });

  const getData = useCallback(() => {
    Client.getEntries({
      content_type: "beachResortRoom",
    })
      .then((res) => {
        let roomsData = formatData(res.items);
        let featuredRoomsData = roomsData.filter(
          (room) => room.featured === true
        );
        let maxPriceData = Math.max(...roomsData.map((item) => item.price));
        let maxSizeData = Math.max(...roomsData.map((item) => item.size));
        return {
          rooms: roomsData,
          featured: featuredRoomsData,
          maxPrice: maxPriceData,
          maxSize: maxSizeData,
        };
      })
      .then((data) => {
        setRooms(data.rooms);
        setFeaturedRooms(data.featured);
        setSortedRooms(data.rooms);
        setFilteredRooms((prevState) => {
          return {
            ...prevState,
            maxPrice: data.maxPrice,
            price: data.maxPrice,
            maxSize: data.maxSize,
          };
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    let updatedFilterRooms = { ...filteredRooms };
    updatedFilterRooms = {
      ...updatedFilterRooms,
      [name]: value,
    };

    let filteringRooms = [...rooms];
    if (updatedFilterRooms.roomType !== "all") {
      filteringRooms = filteringRooms.filter(
        (room) => room.type === updatedFilterRooms.roomType
      );
    }

    if (updatedFilterRooms.capacity > 1) {
      filteringRooms = filteringRooms.filter(
        (room) => room.capacity >= updatedFilterRooms.capacity
      );
    }

    filteringRooms = filteringRooms.filter(
      (room) => updatedFilterRooms.price >= room.price
    );

    filteringRooms = filteringRooms.filter(
      (room) =>
        room.size >= updatedFilterRooms.minSize &&
        room.size <= updatedFilterRooms.maxSize
    );

    if (updatedFilterRooms.breakfast) {
      filteringRooms = filteringRooms.filter((room) => room.breakfast);
    }

    if (updatedFilterRooms.pets) {
      filteringRooms = filteringRooms.filter((room) => room.pets);
    }

    setFilteredRooms(updatedFilterRooms);
    setSortedRooms(filteringRooms);
  };

  return (
    <RoomsContext.Provider
      value={{
        rooms: rooms,
        featuredRooms: featuredRooms,
        sortedRooms: sortedRooms,
        maxPrice: filteredRooms.maxPrice,
        minPrice: filteredRooms.minPrice,
        price: filteredRooms.price,
        maxSize: filteredRooms.maxSize,
        minSize: filteredRooms.minSize,
        roomType: filteredRooms.roomType,
        capacity: filteredRooms.capacity,
        pets: filteredRooms.pets,
        breakfast: filteredRooms.breakfast,
        onFilterRooms: handleChange,
      }}
    >
      {props.children}
    </RoomsContext.Provider>
  );
});

export default ProviderRooms;
