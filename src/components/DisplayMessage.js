import React from "react";
import HomeButton from "./HomeButton";
import "./DisplayMessage.css";

export function DisplayMessage(props) {
  return (
    <div>
      <div className="homeButton">
        <HomeButton />
      </div>

      <h1 style={{ color: props.color }}>
        Hello React World NEW Format TESTing
      </h1>
    </div>
  );
}
