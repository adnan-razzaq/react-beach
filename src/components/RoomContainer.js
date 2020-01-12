import React from "react";
import RoomList from "./RoomList";
import RoomFilter from "./RomFilter";
import Loading from "./Loading";
import { RoomConsumer } from "../context";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
