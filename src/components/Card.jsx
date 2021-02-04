import React from "react";

import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <div className="Title">
        <h1>{props.title}</h1>
      </div>
      <div className="Content">
        <h1>{props.children}</h1>
      </div>
    </div>
  );
}
