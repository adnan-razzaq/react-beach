import React, { Component, Children } from "react";
import items from "./data";

const RoomContext = React.createContext();
const RoomConsumer = RoomContext.Consumer;

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };
  //getdata
  formatdata(ITEMS) {
    let tempitems = ITEMS.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let rooms = { ...item.fields, id: id, images: images };
      return rooms;
    });
    return tempitems;
  }

  getRoom = slug => {
    let tempRoom = [...this.state.rooms];
    let room = tempRoom.find(room => room.slug === slug);
    return room;
  };

  componentDidMount() {
    let rooms = this.formatdata(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
      rooms: rooms,
      sortedRooms: rooms,
      featuredRooms: featuredRooms,
      loading: false
    });
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomProvider, RoomContext, RoomConsumer };
