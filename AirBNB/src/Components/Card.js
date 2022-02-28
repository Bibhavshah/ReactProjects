import React from "react";
import star from "../images/Star 1.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.img} alt="" className="card-img" />
      <div className="card-stats">
        <img src={star} alt="" className="card-stats-img" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) ▪ </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <strong>From {`$${props.price}`} </strong>/ person
      </p>
    </div>
  );
}
