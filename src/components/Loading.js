import React from "react";
import loadingarrow from "../images/gif/loading-arrow.gif";

export default function Loading() {
  return (
    <div className="loading">
      <h3>Data is being loaded...</h3>
      <img src={loadingarrow} alt="" />
    </div>
  );
}
