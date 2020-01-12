import React, { Component, children } from "react";
//import items from "./data";
import Client from "./Contentful";

const RoomContext = React.createContext();
const RoomConsumer = RoomContext.Consumer;

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minprice: 0,
    maxprice: 0,
    minsize: 0,
    maxsize: 0,
    breakfast: false,
    pets: false
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

  handlechange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterrooms
    );
  };

  filterrooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minsize,
      maxsize,
      breakfast,
      pets
    } = this.state;
    // all rooms
    let filterdrooms = [...rooms];
    console.log(filterdrooms);

    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filtering type
    if (type !== "all") {
      filterdrooms = filterdrooms.filter(item => item.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      filterdrooms = filterdrooms.filter(item => item.capacity >= capacity);
    }

    //  filter by price
    filterdrooms = filterdrooms.filter(item => item.price <= price);
    console.log(filterdrooms);

    // filter by size
    filterdrooms = filterdrooms.filter(
      item => item.size >= minsize && item.size <= maxsize
    );
    // filter by breakfast
    if (breakfast) {
      filterdrooms = filterdrooms.filter(item => item.breakfast === true);
    }

    //filter by pets
    if (pets) {
      filterdrooms = filterdrooms.filter(item => item.pets === true);
    }

    this.setState({
      sortedRooms: filterdrooms
    });
  };

  //getdata

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "Beachresort"
      });
      let rooms = this.formatdata(response.items);
      let featuredrooms = rooms.filter(item => {
        return item.featured === true;
      });

      let maxprice = Math.max(...rooms.map(item => item.price));
      let maxsize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms: rooms,
        sortedRooms: rooms,
        featuredRooms: featuredrooms,
        loading: false,
        price: maxprice,
        maxprice: maxprice,
        maxsize: maxsize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handlechange: this.handlechange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomProvider, RoomContext, RoomConsumer };
