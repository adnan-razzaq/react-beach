import React from "react";
import Room from "./Room";

export default function RoomList(props) {
  const { rooms } = props;

  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms found according to your parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomlist">
      <div className="roomslist-center">
        {rooms.map(item => (
          <Room key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
}
