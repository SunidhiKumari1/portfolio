import React from "react";

export default function Card(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div
        className="card h-100 shadow-sm border-0 py-3 px-3"
        style={{ color: "#ffffff", backgroundColor: "#000000" }}
      >
        <img
          src={props.imageUrl}
          className="card-img-top"
          alt={props.title.concat(" Image")}
          style={{
            height: "220px",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text"> {props.description} </p>
          <a href={props.link} className="btn btn-info">
            {" "}
            See Demo{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
