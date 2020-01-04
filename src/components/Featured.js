import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";

export default class Featured extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms } = this.context;
    console.log(featuredRooms);

    return (
      <div>
        faeturd rooms
        <Loading></Loading>
      </div>
    );
  }
}
