import React from "react";

export default function Card(props) {
  return (
    <>
    <div className="card-container">
      <img src={props.image} alt=""  className="card-img"/>
      <div className="card-subContainer">
        <header className="card-header">
          <p><i className="fa fa-map-marker fa-2x"></i></p>
          <p className="header-location">{props.location}</p>
          <p className="header-url">
            <a href={props.Url}>View on goole maps</a>
          </p>
        </header>
        <h1 className="card-title">{props.title}</h1>
        <p className="card-date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
    <hr />
    </>
  );
}
