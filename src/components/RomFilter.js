import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

// get unique values
const getunique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handlechange,
    type,
    capacity,
    price,
    minprice,
    maxprice,
    minsize,
    maxsize,
    breakfast,
    pets
  } = context;

  let types = getunique(rooms, "type");
  types = ["all", ...types];
  //console.log(types);
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  let people = getunique(rooms, "capacity");
  //console.log(people);
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type start */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handlechange}
          >
            {types}
          </select>
        </div>
        {/* select end type */}
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">Capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handlechange}
          >
            {people}
          </select>
        </div>
        {/* guests */}

        {/*price  */}
        <div className="form-group">
          <label htmlFor="Price">Room price ${price}</label>
          <input
            type="range"
            min={minprice}
            max={maxprice}
            name="price"
            id="price"
            value={price}
            className="form-control"
            onChange={handlechange}
          />
        </div>

        {/* end price */}

        {/* for size */}
        <div className="form-group">
          <label htmlFor="maxsize">Room Size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="maxsize"
              id="maxsize"
              value={maxsize}
              className="size-input"
              onChange={handlechange}
            />
            <input
              type="number"
              name="minsize"
              id="minsize"
              value={minsize}
              className="size-input"
              onChange={handlechange}
            />
          </div>
        </div>
        {/* end of size */}

        {/* start of checkbox */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              onChange={handlechange}
              checked={breakfast}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              onChange={handlechange}
              checked={pets}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
        {/* end of checkbox */}
      </form>
    </section>
  );
}
