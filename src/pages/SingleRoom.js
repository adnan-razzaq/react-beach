import React, { Component } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";
import defaultBcg from "../images/defaultBcg.jpeg";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const rooms = getRoom(this.state.slug);
    if (!rooms) {
      return (
        <div className="error">
          <h3>No such page found ...</h3>
          <Link to="/room" className="btn-primary">
            Back to home
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      price,
      capacity,
      size,
      extras,
      breakfast,
      pets,
      images
    } = rooms;

    const [mainimg, ...defaultimg] = images;

    return (
      <>
        <StyledHero img={mainimg}>
          <Banner title={`${name} Room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultimg.map((item, index) => {
              return <img key={index} src={item} alt="" />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size}SQFT</h6>
              <h6>
                Max-Capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "pets not allowed"}</h6>
              <h6>{breakfast && "free breakfast"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>*{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
