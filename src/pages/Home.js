import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Hero>
      <Banner title="Luxiorous Rooms" subtitle="Deluxe Rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          Our rooms
        </Link>
      </Banner>
    </Hero>
  );
}
