import React from "react";

export default function Star(props) {
  // console.log(typeof a);
  return (
    <img
      alt="logo"
      className="ph2"
      src={props.fav ? props.url : "./instaa.png"}
      onClick={props.hc}
    />
  );
}
