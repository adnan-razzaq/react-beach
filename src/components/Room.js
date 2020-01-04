import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <section className="room">
      <div className="img-container">
        <img src={images[0]} alt="images" />
        <div className="price-top">
          <h6>
            ${price}
            <p>per night</p>
          </h6>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </section>
  );
}

Room.propTypes = {
  room: Proptypes.shape({
    name: Proptypes.string.isRequired,
    slug: Proptypes.arrayOf(Proptypes.string).isRequired,
    price: Proptypes.number.isRequired
  })
};
